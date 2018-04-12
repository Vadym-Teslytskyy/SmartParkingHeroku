import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ParkingListFilterComponent} from './parking-list-filter/parking-list-filter.component';
import {ParkingService} from '../parking.service';
import {ParkingListComponent} from './parking-list/parking-list.component';
import {MatProgressBar} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Parking} from '../model/view/parking';
import {ParkingMapComponent} from './parking-map/parking-map.component';

const MiToKm = 1.60934;

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    @ViewChild('parkingMap') private parkingMap: ParkingMapComponent;

    @ViewChild('filter') private filter: ParkingListFilterComponent;

    @ViewChild('progressbar') private progressBar: MatProgressBar;

    private parkings: Parking[] = [];

    private progressBarVisible: boolean = false;
    private progressBarColor: string = 'primary';
    private progressBarMode: string = 'query';

    constructor(private parkingService: ParkingService,
                private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.filter.valueChanges.subscribe(filter => {
            this.showLoadingProgressBar();
            this.parkingMap.lat = filter.location.latitude;
            this.parkingMap.lng = filter.location.longitude;
            this.parkingService.getParkingsNearby(filter.location.latitude, filter.location.longitude, this.filter.radiusMax * 1000).subscribe((response) => {
                this.hideProgressBar();
                this.parkings = response.body;
                this.filterParkings();
            }, error => {
                console.log(error);
                this.showErrorProgressBar();
            });
        });
    }

    private showLoadingProgressBar() {
        this.progressBarVisible = true;
        this.progressBarColor = 'primary';
        this.progressBarMode = 'query';
    }

    private hideProgressBar() {
        this.progressBarVisible = false;
    }

    private showErrorProgressBar() {
        this.progressBarVisible = true;
        this.progressBarColor = 'warn';
        this.progressBarMode = 'determinate';
    }

    private filterParkings() {
        this.parkingMap.parkings = this.parkings.filter(parking => {
            let filter = this.filter.value;
            var distance = require('google-distance-matrix');

            var latLngOrigin = this.parkingMap.lat + ',' + this.parkingMap.lng;
            var lanLngDest = parking.latitude + ',' + parking.longitude;
            var origins = [latLngOrigin];
            var destinations = [lanLngDest];

            distance.key('AIzaSyAufS5bcmpO5UiWxG_MpcSOrIiRNzbUJus');
            distance.units('imperial');

            distance.matrix(origins, destinations, function (err, distances) {
                if (err) {
                    return console.log(err);
                }
                if (!distances) {
                    return console.log('no distances');
                }
                if (distances.status == 'OK') {
                    for (var i = 0; i < origins.length; i++) {
                        for (var j = 0; j < destinations.length; j++) {
                            var origin = distances.origin_addresses[i];
                            var destination = distances.destination_addresses[j];
                            if (distances.rows[0].elements[j].status == 'OK') {
                                let distance = distances.rows[i].elements[j].distance.text;
                                distance = distance.substr(0, distance.indexOf(' '));
                                Number.parseInt(distance);
                                distance *= MiToKm;
                                parking.distance = Math.floor(distance * 10) / 10;
                            } else {
                                console.log(destination + ' is not reachable by land from ' + origin);
                            }
                        }
                    }
                }
            });

            return parking.distance <= filter.radius * 1000
                && ((filter.priceRange.min) ? parking.price >= filter.priceRange.min : true)
                && ((filter.priceRange.max) ? parking.price <= filter.priceRange.max : true);
        });
        this.refreshComponentView();
    }

    private refreshComponentView(): void {
        this.changeDetector.detectChanges();
        setTimeout(() => this.changeDetector.detectChanges(), 1);
    }

}
