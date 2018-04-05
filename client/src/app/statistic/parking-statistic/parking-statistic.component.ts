import {Component, OnInit} from '@angular/core';
import {Parking} from "../../model/view/parking";
import {StatisticsService} from "../statistics.service";
import {ParkingsInfo} from "../parkingsinfo";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-parking-statistic',
    templateUrl: './parking-statistic.component.html',
    styleUrls: ['./parking-statistic.component.css']
})
export class ParkingStatisticComponent implements OnInit {

    parkings: ParkingsInfo[];
    parkingsStreets: String[];

    constructor(private statisticService: StatisticsService, private router: ActivatedRoute) {
    }

    ngOnInit() {

    }

    findAllParkings(): void {
        this.statisticService.getAllParkings()
            .subscribe(parkings => {
                this.parkings = parkings;
            });
    }

    findMostPopularProvidersByStreet(value: string) {
        this.statisticService.getAllParkingsByCity(value)
            .subscribe(parkings => {
                this.parkings = parkings;
            });
    }

    findBestParkingsByStreet(value: string) {
        this.statisticService.getBestParkingsByStreet(value)
            .subscribe(parkings => {
                this.parkings = parkings;
            });
    }

    findParkingsStreets(value: string) {
        this.statisticService.getParkingsStreet(value)
            .subscribe(parkingsStreet => {
                this.parkingsStreets = parkingsStreet;
            });
    }

}
