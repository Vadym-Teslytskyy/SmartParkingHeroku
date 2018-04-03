import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginData} from "../login/login-data";
import {Observable} from "rxjs/Observable";
import {Token} from "./token";

@Injectable()
export class TokenService {

    private refreshUrl = environment.apiUrl + '/refresh';

  constructor(private http: HttpClient) {}

    refresh(token: Token): Observable<any> {
        return this.http.post(this.refreshUrl, token);
    }

}
