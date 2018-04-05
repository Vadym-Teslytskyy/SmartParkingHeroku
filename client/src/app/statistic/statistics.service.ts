import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParkingsInfo} from "./parkingsinfo";
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class StatisticsService {

    private statisticUrl = environment.apiUrl + '/statistic';

    constructor(private http: HttpClient) {
    }

    getAllParkings(): Observable<ParkingsInfo[]> {
        return this.http.get<ParkingsInfo[]>(this.statisticUrl + '/allparkings');
    }

    getAllParkingsByCity(input: string): Observable<ParkingsInfo[]> {
        return this.http.get<ParkingsInfo[]>(this.statisticUrl + '/findparkings/' + input);
    }

    getBestParkingsByStreet(input: string): Observable<ParkingsInfo[]> {
        return this.http.get<ParkingsInfo[]>(this.statisticUrl + '/findbestparkingsbystreet/' + input);
    }

    getParkingsStreet(input: string): Observable<String[]> {
        return this.http.get<String[]>(this.statisticUrl + '/findparkingstreets/' + input);
    }

}
