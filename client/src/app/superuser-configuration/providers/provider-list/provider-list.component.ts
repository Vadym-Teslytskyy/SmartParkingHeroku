import {Component, OnInit} from '@angular/core';
import {Provider} from '../../../model/view/provider';
import {ProviderService} from '../provider.service';
import {ProviderListFilterParameters} from '../../../model/filter/provider-list-filter-parameters';
import {FormControl, FormGroup,} from '@angular/forms';

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

    constructor(private providerService: ProviderService) {
    }

    ngOnInit() {
        this.getProviders();
    }

    getProviders(): void {
        this.providerFilter = this.providerFilterForm.value;
        this.providerService.getAll(this.providerFilter)
            .subscribe(providers => this.providers = providers);
    }

}
