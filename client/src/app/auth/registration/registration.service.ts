import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationData} from "./registration-data";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(data: RegistrationData): Observable<any> {
      return this.http.post("http://localhost:8080/signup", data)
  }

}
