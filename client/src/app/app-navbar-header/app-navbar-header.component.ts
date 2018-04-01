import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../auth/token/token-storage';

@Component({
    selector: 'app-navbar-header',
    templateUrl: './app-navbar-header.component.html',
    styleUrls: ['./app-navbar-header.component.css']
})
export class AppNavbarHeaderComponent implements OnInit {

  navTitle = 'SmartParking';

  constructor() { }

  ngOnInit() {
  }

  getRole(): string {
    return TokenStorage.getRole();
  }

  hasToken(): boolean{
    return TokenStorage.hasToken();
  }

  logOut() {
      TokenStorage.signOut();
  }


}
