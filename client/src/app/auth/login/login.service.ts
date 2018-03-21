import { Injectable } from '@angular/core';
import {LoginData} from "./login-data";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  signIn(loginData: LoginData): Observable<any> {
      return this.http.post("http://localhost:8080/token/generate-token", loginData)
  }

}
