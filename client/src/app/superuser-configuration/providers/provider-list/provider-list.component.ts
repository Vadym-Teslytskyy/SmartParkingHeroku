import {Component, OnInit} from '@angular/core';
import {Provider} from '../../../model/view/provider';
import {ProviderService} from '../provider.service';
import {ProviderListFilterParameters} from '../../../model/filter/provider-list-filter-parameters';
import {FormControl, FormGroup,} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-provider-list',
    templateUrl: './provider-list.component.html',
    styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
    providers: Provider[];
    providerFilterForm = new FormGroup({
        active: new FormControl('all', []),
        companyName: new FormControl('', [])
    });

    providerFilter: ProviderListFilterParameters;

    constructor(private providerService: ProviderService, private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProviders();
    }

    getProviders(): void {
        if (this.router.queryParams) {
            console.log("SSSSSSSSSSSSs")
            this.router.queryParams
                .subscribe(params => {
                    this.providerFilter = new ProviderListFilterParameters();
                    this.providerFilter.active = params['active'];
                    this.providerFilter.companyName = params['companyName'];
                });
        }
        this.providerService.getAllByFilter(this.providerFilter)
            .subscribe(providers => this.providers = providers);
    }

}
