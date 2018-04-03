import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {MatSnackBar} from '@angular/material';

import {Parking} from '../../model/view/parking';
import {ManagerParkingService} from '../manager-parking.service';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-manager-parking-configure',
    templateUrl: './manager-parking-configure.component.html',
    styleUrls: ['./manager-parking-configure.component.css']
})
export class ManagerParkingConfigureComponent implements OnInit {

    configureType: ConfigureType;

    step = -1;

    loadedParking: Parking;
    parking: Parking;

    parkingConfigureForm = new FormGroup({
        city: new FormControl('', [
            Validators.required,
        ]),
        street: new FormControl('', [Validators.required,]),
        building: new FormControl('', [Validators.required,]),
        latitude: new FormControl('', [Validators.required,]),
        longitude: new FormControl('', [Validators.required,]),
        price: new FormControl('', [Validators.required,]),
        token: new FormControl('', [Validators.required,]),
        providerName: new FormControl('', []),
        favoritesCount: new FormControl('', []),
        spotsCount: new FormControl('', [])
    });

    constructor(private route: ActivatedRoute,
                public snackBar: MatSnackBar,
                private formBuilder: FormBuilder,
                private managerParkingService: ManagerParkingService) {
    }

    ngOnInit() {
        if (this.route.root.firstChild.snapshot.data['configureType'] ===
            ManagerParkingConfigureType.EDIT) {
            this.configureType = new ConfigureType('edit', ManagerParkingConfigureType.EDIT);
            this.loadParking();
        } else {
            this.configureType = new ConfigureType('add', ManagerParkingConfigureType.ADD);
            this.loadedParking = new Parking();
            this.parking = new Parking();
        }
    }

    loadParking(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.managerParkingService.getParking(id)
            .subscribe(parking => {
                this.loadedParking = parking;
                this.parking = parking.clone();
            });
    }

    saveParking(): void {
        if (this.configureType.type === ManagerParkingConfigureType.ADD) {
            this.parking.providerId = 1;
        }
        this.managerParkingService.saveParking(this.parking)
            .subscribe((response: HttpResponse<any>) => {
                this.snackBar.open('Parking updated sucsessfully.', null, {
                    duration: 2000
                });
            });
    }

    setStep(index: number): void {
        this.step = index;
    }

    nextStep(): void {
        this.step++;
    }

    prevStep(): void {
        this.step--;
    }

    showOnMap(): void {
        window.open(`https://www.google.com/maps/search/?api=1&query=
                    ${this.parking.latitude},${this.parking.longitude}`);
    }

    generateToken() {
        this.parking.token = uuid();
    }

    resetAddress() {
        this.parking.city = this.loadedParking.city;
        this.parking.street = this.loadedParking.street;
        this.parking.building = this.loadedParking.building;
    }

    resetLocation() {
        this.parking.latitude = this.loadedParking.latitude;
        this.parking.longitude = this.loadedParking.longitude;
    }

    resetPrice() {
        this.parking.price = this.loadedParking.price;
    }

    resetToken() {
        this.parking.token = this.loadedParking.token;
    }
}

export enum ManagerParkingConfigureType {
    EDIT, ADD
}

class ConfigureType {
    constructor(public text: string, public type: ManagerParkingConfigureType) {
    }
}
