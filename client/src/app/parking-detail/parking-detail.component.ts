import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog, MatSnackBar} from '@angular/material';

import {Parking} from '../model/view/parking';
import {ParkingService} from "../parking.service";
import {Spot} from '../model/view/spot';
import {Observable} from 'rxjs/Observable';
import {
    FavoriteAddData,
    FavoritesAddConfigmDialogComponent
} from './favorites-add-configm-dialog/favorites-add-configm-dialog.component';
import {Favorite} from '../model/view/favorite';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.css']
})
export class ParkingDetailComponent implements OnInit {

   parking: Parking;
    favorite: Favorite;
   spots: Spot[];
   freeSpots: Spot[];
   type: String;
   fullnessBarMessage: String;
   max: number;
   value:number;
   thirtySecInterval: number = 30000;
   favoriteNameInputHide: boolean = true;
   

  constructor(
      private route: ActivatedRoute,
      private parkingService: ParkingService,
      private location: Location,
      private snackBar: MatSnackBar,
      private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getParking().subscribe(parking => {
       this.fullnessBarCount();
    });
    this.getSpots();
    this.getAvailableSpots();
    setInterval(this.refresh(), this.thirtySecInterval);
  }

  refresh(): void{
    this.getParking().subscribe(parking => {
      this.fullnessBarCount();
   });
    this.getSpots();
    this.getAvailableSpots();
  }

  fullnessBarCount(): void {
      this.max = this.parking.spotsCount;
      this.value = this.parking.spotsCount - this.parking.availableSpotsCount;
    if (this.value < (this.max * 0.6)) {
      this.type = 'success';
      this.fullnessBarMessage = 'Welcome!';
    } else if (this.value < (this.max*0.75)) {
      this.type = 'info';
      this.fullnessBarMessage = 'You have a chance!';
    } else if (this.value < (this.max*0.99)) {
      this.type = 'warning';
      this.fullnessBarMessage = 'Hurry up!';
    }else {
      this.type = 'danger';
      this.fullnessBarMessage = 'Sorry, all spots are busy!';
    }
  }

  getParking(): Observable<Parking> {
     const id = parseInt(this.route.snapshot.paramMap.get('id'));
     let o = this.parkingService.getParking(id);
    o.subscribe(parking => this.parking = parking);
    return o;
  }

  getSpots(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.parkingService.getSpotsByParkingId(id)
      .subscribe(spots => this.spots = spots);
  }

  getAvailableSpots(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.parkingService.getAvailableSpotsByParkingId(id)
      .subscribe(spots => this.freeSpots = spots);
  }

    onParkingAddToFavoritesClick(): void {
        let dialogRef = this.dialog.open(FavoritesAddConfigmDialogComponent, {
            data: new FavoriteAddData()
        });

        dialogRef.afterClosed().subscribe(data => {
            if (data.confirmed) {

                // this.managerParkingService.deleteParking(parking)
                //     .subscribe(response => this.onDeleteResponse(parking, response));
            }
        });
    }

}
