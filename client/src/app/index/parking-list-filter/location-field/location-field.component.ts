import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {MapsAPILoader} from '@agm/core';
import {IpLocation, IpLocationService} from '../../../service/ip-location.service';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-parking-list-filter-location-field',
    templateUrl: './location-field.component.html',
    styleUrls: ['./location-field.component.css']
})
export class LocationFieldComponent implements OnInit {

    public readonly control: FormControl = new FormControl();

    private predictionItems: PredictionItem[] = [];

    private geolocationItem: GeolocationItem;

    private ipLocationItem: IpLocationItem;

    private geocodeService: google.maps.Geocoder;

    private autocompleteService: google.maps.places.AutocompleteService;

    private controlChangesSubscription: Subscription;

    private geolocationDescriptor: number;

    private previousSelectedItem: AutocompleteItem<any>;

    private selectedItem: AutocompleteItem<any>;

    private readonly valueChangesSubject = new Subject<Location>();

    public readonly valueChanges = this.valueChangesSubject.asObservable();

    private internalValue: Location;

    constructor(private mapsAPILoader: MapsAPILoader,
                private ipLocationService: IpLocationService,
                private changeDetector: ChangeDetectorRef) {
    }

    public get value(): Location {
        return this.internalValue;
    }

    ngOnInit(): void {
        this.valueChanges.subscribe(value => this.internalValue = value);
        this.requestIpLocation();
        this.initMapsAPI().then(() => {
            this.requestGeolocation();
        });
    }

    public onLocationInputBlur(): void {
        if (!this.selectedItem) {
            this.control.setErrors(
                {'locationAutocompleteItemNotSelected': {value: this.control.value}});
        } else {
            this.control.setErrors(null);
        }
    }

    public locationAutocompleteDisplayWith(item: AutocompleteItem<any>): string {
        return item ? item.label : '';
    }

    public locationAutocompleteItemNotSelected(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            return this.selectedItem
                ? {'locationAutocompleteItemNotSelected': {value: control.value}}
                : null;
        };
    }

    ngOnDestroy(): void {
//        this.controlChangesSubscription.unsubscribe();
        window.navigator.geolocation.clearWatch(this.geolocationDescriptor);
    }

    private initMapsAPI(): Promise<void> {
        return this.mapsAPILoader.load().then(() => {
            this.geocodeService = new google.maps.Geocoder();
            this.autocompleteService = new google.maps.places.AutocompleteService();
            this.controlChangesSubscription = this.control.valueChanges.subscribe(value => this.onValueChange(value));
        });
    }

    private requestGeolocation(): void {
        if (window.navigator && window.navigator.geolocation) {
            this.geolocationDescriptor = window.navigator.geolocation.watchPosition(
                position => this.onGeolocationSuccess(position),
                error => this.onGeolocationError(error),
                <PositionOptions> {
                    timeout: 1000,
                    enableHighAccuracy: false
                }
            );
        }
    }

    private requestIpLocation(): void {
        this.ipLocationService.getLocation(
            ipLocation => this.onIpLocationSuccess(ipLocation),
            error => this.onIpLocationError(error));
    }

    private onValueChange(value: AutocompleteItem<any> | string): void {
        if (value instanceof AutocompleteItem) {
            this.previousSelectedItem = this.selectedItem;
            this.selectedItem = value;
            this.onSelectedItemChange(this.selectedItem);
        } else {
            if (this.selectedItem && !this.selectedItem.equalsWithLabel(value)) {
                this.previousSelectedItem = this.selectedItem;
                this.selectedItem = null;
                this.onSelectedItemChange(this.selectedItem);
            }
            if (this.previousSelectedItem && this.previousSelectedItem.equalsWithLabel(value)) {
                let buffer = this.previousSelectedItem;
                this.previousSelectedItem = this.selectedItem;
                this.selectedItem = buffer;
                this.onSelectedItemChange(this.selectedItem);
            }
            this.updateLocationAutocompletePredictionItems(value);
        }
    }

    private onSelectedItemChange(item: AutocompleteItem<any>): void {
        if (item instanceof LocationItem) {
            this.valueChangesSubject.next(item.location);
        } else if (item instanceof PredictionItem) {
            let request = <google.maps.GeocoderRequest> {
                placeId: item.source.place_id,
            };
            this.geocodeService.geocode(request, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    let latitude = results[0].geometry.location.lat();
                    let longitude = results[0].geometry.location.lng();
                    this.valueChangesSubject.next(new Location(latitude, longitude));
                } else {
                    console.warn('Google API Geocoder error: ' + status);
                }
            });
        }
    }

    private onGeolocationSuccess(position: Position): void {
        let request = <google.maps.GeocoderRequest> {
            location: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        };
        this.geocodeService.geocode(request, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK || status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                let address = (status === google.maps.GeocoderStatus.OK)
                    ? results[0].formatted_address
                    : position.coords.latitude + ', ' + position.coords.longitude;
                this.geolocationItem = new GeolocationItem(position, address);
                if (this.geolocationItem === this.selectedItem) {
                    this.control.setValue(this.locationAutocompleteDisplayWith(this.geolocationItem));
                    this.refreshComponentView();
                }
            } else {
                console.warn('Google API Geocoder error: ' + status);
            }
        });
    }

    private onGeolocationError(error: PositionError): void {
        let errorName: string;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorName = 'PERMISSION_DENIED';
                break;
            case error.POSITION_UNAVAILABLE:
                errorName = 'POSITION_UNAVAILABLE';
                break;
            case error.TIMEOUT:
                errorName = 'TIMEOUT';
                break;
        }
        console.log('Current geolocation error: ' + errorName);
    }

    private onIpLocationSuccess(ipLocation: IpLocation): void {
        this.ipLocationItem = new IpLocationItem(ipLocation);
        this.refreshComponentView();
    }

    private onIpLocationError(error: any): void {
        console.log('Current ip location error: ' + error);
    }

    private updateLocationAutocompletePredictionItems(value: string): void {
        if (value !== null && value.length > 0) {
            const request = <google.maps.places.AutocompletionRequest> {
                input: value,
                location: this.geolocationItem
                    ? this.geolocationItem.location.toLatLng()
                    : this.geolocationItem
                        ? this.ipLocationItem.location.toLatLng()
                        : undefined,
                radius: 0
            };
            this.autocompleteService.getPlacePredictions(request, (predictions) => {
                if (value == this.control.value) {
                    if (predictions !== null) {
                        this.predictionItems = predictions
                            .filter((value, index) => index < 4)
                            .map(p => new PredictionItem(p));
                    } else {
                        this.predictionItems = [];
                    }
                    this.refreshComponentView();
                }
            });
        } else {
            this.predictionItems = [];
            this.refreshComponentView();
        }
    }

    private refreshComponentView(): void {
        this.changeDetector.detectChanges();
        setTimeout(() => this.changeDetector.detectChanges(), 1);
    }
}

export abstract class AutocompleteItem<T> {

    public readonly label: string;

    public readonly source: T;

    public constructor(source: T, label: string) {
        this.label = label;
        this.source = source;
    }

    public equalsWithLabel(label: string): boolean {
        if (!label) {
            return false;
        }
        let thisTokens = this.labelToTokens(this.label);
        let otherTokens = this.labelToTokens(label);
        return thisTokens.length == otherTokens.length
            && thisTokens.every((v, i) => v === otherTokens[i]);
    }

    protected labelToTokens(label: string): string[] {
        return label.trim().split(/[, ]+/);
    }
}

export class PredictionItem extends AutocompleteItem<google.maps.places.AutocompletePrediction> {

    public constructor(source: google.maps.places.AutocompletePrediction) {
        super(source, source.description);
    }
}

export class LocationItem<T> extends AutocompleteItem<T> {

    public readonly location: Location;

    public constructor(source: T, address: string, location: Location) {
        super(source, address);
        this.location = location;
    }
}

export class GeolocationItem extends LocationItem<Position> {

    public constructor(source: Position, address: string) {
        super(source, address, new Location(source.coords.latitude, source.coords.longitude));
    }
}

export class IpLocationItem extends LocationItem<IpLocation> {

    public constructor(source: IpLocation) {
        super(source, source.address, new Location(source.latitude, source.longitude));
    }
}

export class Location {

    public readonly latitude: number;
    public readonly longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public toLatLng(): google.maps.LatLng {
        return new google.maps.LatLng(this.latitude, this.longitude);
    }
}
