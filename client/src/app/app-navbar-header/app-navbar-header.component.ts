import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../auth/token/token-storage';

@Component({
    selector: 'app-navbar-header',
    templateUrl: './app-navbar-header.component.html',
    styleUrls: ['./app-navbar-header.component.css']
})
export class AppNavbarHeaderComponent implements OnInit {

  navTitle = 'SmartParking';

  constructor(private tokenStorage: TokenStorage) { }

  ngOnInit() {
  }

  getRole(): string {
    return this.tokenStorage.getRole();
  }

  hasToken(): boolean{
    return this.tokenStorage.hasToken();
  }

  logOut() {
      this.tokenStorage.signOut();
  }


}
