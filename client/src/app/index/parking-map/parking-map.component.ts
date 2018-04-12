import {Component, OnInit, ViewChild} from '@angular/core';
import {Parking} from '../../model/view/parking';
import {ParkingService} from '../../parking.service';

@Component({
    selector: 'app-parking-map',
    templateUrl: './parking-map.component.html',
    styleUrls: ['./parking-map.component.css']
})


export class ParkingMapComponent implements OnInit {
    lat = 49.843977;
    lng = 24.026318;
    parkings: Parking[];
    dir = undefined;
    distance: string;

    constructor(private parkingService: ParkingService) {
    }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;

                this.parkingService.getParkingsNearby(this.lat, this.lng, 7000).subscribe((response) => {
                    this.parkings = response.body;
                }, error => {
                    console.log(error);
                });
            });
        }
    }

    getDirection(lat, lng) {
        this.dir = {
            origin: {lat: this.lat, lng: this.lng},
            destination: {lat: lat, lng: lng},
            drivingOptions: {
                departureTime: new Date(Date.now()),
                trafficModel: 'pessimistic'
            },
            travelMode: 'DRIVING'
        };
    }

    round(floatNumber: number): number {
        return Math.floor(floatNumber) / 1000;
    }

}
