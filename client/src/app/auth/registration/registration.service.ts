import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationData} from './registration-data';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {InfoResponse} from "../info-response";

@Injectable()
export class RegistrationService {

    private registrationUrl = environment.apiUrl + '/auth/signup';

    constructor(private http: HttpClient) {
    }

    register(data: RegistrationData): Observable<any> {
        return this.http.post(this.registrationUrl, data);
    }

}
