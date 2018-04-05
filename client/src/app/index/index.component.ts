import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ParkingListFilterComponent} from './parking-list-filter/parking-list-filter.component';
import {ParkingService} from '../parking.service';
import {ParkingListComponent} from './parking-list/parking-list.component';
import {MatProgressBar} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Parking} from '../model/view/parking';
import {ParkingMapComponent} from './parking-map/parking-map.component';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    @ViewChild('parkingList') private parkingList: ParkingMapComponent;

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
        this.filter.radiusChanges.subscribe(() => this.filterParkings());
        this.filter.priceRangeChanges.subscribe(() => this.filterParkings());

        this.filter.locationChanges.subscribe(location => {
            this.showLoadingProgressBar();
            this.parkingService.getParkingsNearby(location.latitude, location.longitude, this.filter.radiusMax * 1000).subscribe((response) => {
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
        this.parkingList.parkings = this.parkings.filter(parking => {
            let filter = this.filter.value;
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
