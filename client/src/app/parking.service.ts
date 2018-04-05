import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Parking} from './model/view/parking';
import {Spot} from './model/view/spot';
import {environment} from '../environments/environment';
import { Favorite } from './model/view/favorite';
import {SpotStatistic} from './model/view/spotstatistic';


@Injectable()
export class ParkingService {

    private parkingNearbyUrl = environment.apiUrl + '/parkings-nearby/';
    private parkingDetailUrl = environment.apiUrl + '/parkingdetail/';
    private spotstatistic = environment.apiUrl + '/spotstatistic/';
                                                   

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

    // saveParking(parking: Parking): Observable<HttpResponse<any>> {
    //     return this.http.post<HttpResponse<any>>(
    //         this.parkingConfigureUrl + '/parking/save', parking, {observe: 'response'});
    // }

    saveToFavorite(id: number, favorite: Favorite): Observable<HttpResponse<any>>{
        return this.http.post<HttpResponse<any>>(
            this.parkingDetailUrl + id + '/savetofavorites', favorite, {observe: 'response'});
    }



    getSpotStatistic(id: number): Observable<SpotStatistic[]> {
        return this.http.get<SpotStatistic[]>(this.spotstatistic + id);
    }





}
