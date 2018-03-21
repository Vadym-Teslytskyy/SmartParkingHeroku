import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

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

}
