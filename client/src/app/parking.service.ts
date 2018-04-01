import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Parking} from './model/view/parking';
import {Spot} from './model/view/spot';
import {environment} from '../environments/environment';

@Injectable()
export class ParkingService {

    private parkingNearbyUrl = environment.apiUrl + '/parkings-nearby/';
    private parkingDetailUrl = environment.apiUrl + '/parkingdetail/';

    constructor(private http: HttpClient) {
    }

    getParkingsNearby(latitude: number, longitude: number, radius: number): Observable<HttpResponse<Parking[]>> {
        return this.http.get<Parking[]>(this.parkingNearbyUrl, {
            params: {
                latitude: latitude.toString(),
                longitude: longitude.toString(),
                radius: radius.toString(),
            },
            observe: 'response'
        });
    }

    getParking(id: number): Observable<Parking> {
        return this.http.get<Parking>(this.parkingDetailUrl + id);
    }

    getSpotsByParkingId(id: number): Observable<Spot[]> {
        return this.http.get<Spot[]>(this.parkingDetailUrl + id + '/spots');
    }

    getAvailableSpotsByParkingId(id: number): Observable<Spot[]> {
        return this.http.get<Spot[]>(this.parkingDetailUrl + id + '/freespots');
    }

}
