import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../statistics.service";
import {Parking} from "../../model/view/parking";
import {MatSnackBar} from "@angular/material";
import {PagerService} from "../../_services/pager.service";

@Component({
    selector: 'app-parking-statistic',
    templateUrl: './parking-statistic.component.html',
    styleUrls: ['./parking-statistic.component.css']
})
export class ParkingStatisticComponent implements OnInit {

    parkings: Parking[] = [];
    parkingsStreets: string[];
    parkingsCities: string[];
    selectedCity: string = 'Lviv';
    selectedStreet: string = '';
    selectedNumberOfDays: number = 7;
    days = [7, 14, 30, 365];
    calculatedDate = new Date();

    pager: any = {};
    pagedParkingItems: Parking[];
    allParkings: number;

    constructor(private statisticService: StatisticsService,
                private snackBar: MatSnackBar,
                private pagerService: PagerService) {
    }

    ngOnInit() {
        this.findAllParkingsCities();
        this.findBestParkingsInTheCity();
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        if (this.parkings.length > 0) {
            // get pager object from service
            this.pager = this.pagerService.getPager(this.parkings.length, page);

            // get current page of items
            this.pagedParkingItems = this.parkings.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else {
            this.pagedParkingItems = this.parkings;
        }
        this.allParkings = this.parkings.length;
    }

    findBestParkings() {
        this.calculateDate();

        if (this.selectedStreet != '') {

            this.statisticService.getBestParkingsByCityStreetDate(this.selectedCity, this.selectedStreet, this.calculatedDate.getTime())
                .subscribe(parkings => {
                    this.parkings = parkings;
                    this.setPage(1);
                })
        } else {
            this.findBestParkingsInTheCity();
        }
        this.refreshDate();
    }

    findBestParkingsInTheCity() {
        this.calculateDate();
        this.statisticService.getBestParkingsInTheCityByDate(this.selectedCity, this.calculatedDate.getTime())
            .subscribe(parkings => {
                this.parkings = parkings;
                this.setPage(1);
            });
        this.refreshDate();
    }

    findParkingsStreetsFromInput(input: string) {
        this.statisticService.getParkingsStreetsByAnyMatching(this.selectedCity, input)
            .subscribe(parkingsStreets => {
                this.parkingsStreets = parkingsStreets;
            });
    }

    findAllParkingsCities() {
        this.statisticService.getAllParkingsCities()
            .subscribe(parkingsCities => {
                this.parkingsCities = parkingsCities;
            });
    }

    clearStreetAndFindTheBestParkingsInTheCity() {
        this.selectedStreet = '';
        this.findBestParkingsInTheCity();
    }

    selectStreet(street: string) {
        this.selectedStreet = street;
    }

    calculateDate() {
        this.calculatedDate.setDate(new Date().getDate() - this.selectedNumberOfDays);
    }

    refreshDate() {
        this.calculatedDate = new Date();
    }


}
