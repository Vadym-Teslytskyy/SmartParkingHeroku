import { Component, OnInit } from '@angular/core';
import {ProviderService} from './providers/provider.service';

@Component({
  selector: 'app-superuser-configuration',
  templateUrl: './superuser-configuration.component.html',
  styleUrls: ['./superuser-configuration.component.css']
})
export class SuperuserConfigurationComponent implements OnInit {

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
  }


}
