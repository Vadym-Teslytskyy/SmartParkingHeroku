import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {Parking} from './model/view/parking';
import { Spot } from './model/view/spot';

@Injectable()
export class ParkingService {
    parkings: Parking[];
    // private parkingUrl = 'assets/test.json';
    private parkingUrl = 'http://localhost:8080/p';
    private parkingDetailUrl = 'http://localhost:8080/parkingdetail/';

    constructor(private http: HttpClient) {
    }

    /** Log a HeroService message with the MessageService */


  getParkings(): Observable<Parking[]>{
    return this.http.get<Parking[]>(this.parkingUrl);
  }

   getParking(id: number): Observable<Parking> {
    return this.http.get<Parking>(this.parkingDetailUrl + id);
   }

    getSpotsByParkingId(id: number): Observable<Spot[]> {
        return this.http.get<Spot[]>(this.parkingDetailUrl + id + '/spots');
    }

   getAvailableSpotsByParkingId(id: number): Observable<Spot[]>{
    return this.http.get<Spot[]>(this.parkingDetailUrl + id +'/freespots');
   }

}
