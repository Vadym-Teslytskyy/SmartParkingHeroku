import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Parking} from "../model/view/parking";

@Injectable()
export class StatisticsService {

    private statisticUrl = environment.apiUrl + '/statistic';

    constructor(private http: HttpClient) {
    }

    getParkingsStreetsByAnyMatching(city: string, street: string): Observable<string[]> {
        return this.http.get<string[]>(this.statisticUrl + '/findparkingstreets', {
            params: {
                city: city,
                street: street
            }
        });
    }

    getParkingsCitiesByAnyMatching(input: string): Observable<string[]> {
        return this.http.get<string[]>(this.statisticUrl + '/findparkingscities/' + input);
    }

    getAllParkingsCities(): Observable<string[]> {
        return this.http.get<string[]>(this.statisticUrl + '/findallparkingscities');
    }

    getBestParkingsByCityStreetDate(city: string, street: string, date: number): Observable<Parking[]> {
        return this.http.get<Parking[]>(this.statisticUrl + '/findbestparkings', {
            params: {
                city: city,
                street: street,
                date: date.toString()
            }
        });
    }

    getBestParkingsInTheCityByDate(city: string, date: number): Observable<Parking[]> {
        return this.http.get<Parking[]>(this.statisticUrl + '/findbestparkingsincity', {
            params: {
                city: city,
                date: date.toString()
            }
        });
    }

}
