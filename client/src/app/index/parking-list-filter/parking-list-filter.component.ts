import {Component, OnInit, ViewChild} from '@angular/core';
import {Location, LocationFieldComponent} from './location-field/location-field.component';
import {FormGroup} from '@angular/forms';
import {RadiusFieldComponent} from './radius-field/radius-field.component';
import {PriceRange, PriceRangeFieldComponent} from './price-range-field/price-range-field.component';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-parking-list-filter',
    templateUrl: './parking-list-filter.component.html',
    styleUrls: ['./parking-list-filter.component.css'],
})
export class ParkingListFilterComponent implements OnInit {

    @ViewChild('locationField')
    private locationField: LocationFieldComponent;

    @ViewChild('radiusField')
    private radiusField: RadiusFieldComponent;

    @ViewChild('priceRangeField')
    private priceRangeField: PriceRangeFieldComponent;

    private readonly formGroup = new FormGroup({});

    private readonly valueChangesSubject = new Subject<ParkingListFilter>();

    public readonly valueChanges = this.valueChangesSubject.asObservable();

    private internalValue: ParkingListFilter;

    constructor() {
    }

    public get value(): ParkingListFilter {
        return this.internalValue;
    }

    public get locationChanges(): Observable<Location> {
        return this.locationField.valueChanges;
    }

    public get radiusChanges(): Observable<number | null> {
        return this.radiusField.valueChanges;
    }

    public get priceRangeChanges(): Observable<PriceRange> {
        return this.priceRangeField.valueChanges;
    }

    ngOnInit() {
        this.locationField.valueChanges.subscribe(location => {
            this.internalValue = new ParkingListFilter(location, this.priceRangeField.value, this.radiusField.value);
        });
        this.priceRangeField.valueChanges.subscribe(priceRange => {
            if (this.locationField.value) {
                this.internalValue = new ParkingListFilter(this.locationField.value, priceRange, this.radiusField.value);
            }
        });
        this.radiusField.valueChanges.subscribe(radius => {
            if (this.locationField.value) {
                this.internalValue = new ParkingListFilter(this.locationField.value, this.priceRangeField.value, radius);
            }
        });
    }

    public get radiusMax(): number {
        return this.radiusField.max;
    }
}

export class ParkingListFilter {

    public readonly location: Location;
    public readonly priceRange: PriceRange;
    public readonly radius: number;

    public constructor(location: Location, priceRange: PriceRange, radius: number) {
        this.location = location;
        this.priceRange = priceRange;
        this.radius = radius;
    }

    public deriveLocation(location: Location): ParkingListFilter {
        return new ParkingListFilter(location, this.priceRange, this.radius);
    }

    public derivePriceRange(priceRange: PriceRange): ParkingListFilter {
        return new ParkingListFilter(this.location, priceRange, this.radius);
    }

    public deriveRadius(radius: number): ParkingListFilter {
        return new ParkingListFilter(this.location, this.priceRange, radius);
    }
}
