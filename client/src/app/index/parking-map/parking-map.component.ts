import {Component, OnInit} from '@angular/core';
import {ParkingService} from '../../parking.service';
import {Parking} from '../../model/view/parking';

@Component({
    selector: 'app-parking-map',
    templateUrl: './parking-map.component.html',
    styleUrls: ['./parking-map.component.css']
})
export class ParkingMapComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number;
    lng: number;
    parkings: Parking[];

    constructor(private parkingService: ParkingService) {
    }

    ngOnInit() {
        this.findMe();
        this.parkingCoord();
    }

    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position => {
                this.showPosition(position);
            }));
        }
    }

    private showPosition(position: Position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
    }

    parkingCoord() {
        this.parkingService.getParkingsNearby(this.lat, this.lng, 20)
            .subscribe((response) => {
                this.parkings = response.body;
            }, error => {
                console.log(error);
            });

    }
}
