import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

import {ManagerParkingService} from "../manager-parking.service";
import {Parking} from "../../model/view/parking";

@Component({
    selector: 'app-manager-parking-configure',
    templateUrl: './manager-parking-configure.component.html',
    styleUrls: ['./manager-parking-configure.component.css']
})
export class ManagerParkingConfigureComponent implements OnInit {

    parking: Parking;

    parkingConfigureForm = new FormGroup({
        city: new FormControl('', []),
        street: new FormControl('', []),
        building: new FormControl('', []),
        latitude: new FormControl('', []),
        longitude: new FormControl('', []),
        price: new FormControl('', []),
        token: new FormControl('', []),
        providerName: new FormControl('', []),
        favoritesCount: new FormControl('', []),
        spotsCount: new FormControl('', [])
    });

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private managerParkingService: ManagerParkingService) {
    }

    ngOnInit() {
        this.getParking();
    }

    getParking(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.managerParkingService.getParking(id)
            .subscribe(parking => this.parking = parking);
        // TODo Catch errors
    }

    saveParking(): void {
        // this.parking = this.parkingConfigureForm.value;
        this.managerParkingService.saveParking(this.parking)
            .subscribe(response => {
                console.log('Response: ' + response)
                // TODO Write response handler
            });
    }
}
