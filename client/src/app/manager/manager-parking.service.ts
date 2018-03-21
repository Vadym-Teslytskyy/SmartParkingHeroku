import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import {Parking} from "../model/view/parking";

@Injectable()
export class ManagerParkingService {

    // TODO Change url to manager-configuration/parking/{id}

    private parkingConfigureUrl = "http://localhost:8080/manager-parkings-configure";

    constructor(private http: HttpClient) {
    }

    getParking(id: number): Observable<Parking> {
        return this.http.get<Parking>(this.parkingConfigureUrl + "/" + id);
    }

    saveParking(parking: Parking): Observable<HttpResponse<any>> {
        return this.http.post<HttpResponse<any>>(
            this.parkingConfigureUrl + '/save', parking, {observe: 'response'});
    }
}
