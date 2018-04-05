import {Injectable} from '@angular/core';
import {LoginData} from './login-data';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class LoginService {

    private loginUrl = environment.apiUrl + '/auth/generate-token';

    constructor(private http: HttpClient) {
    }

    signIn(loginData: LoginData): Observable<any> {
        return this.http.post(this.loginUrl, loginData);
    }

}
