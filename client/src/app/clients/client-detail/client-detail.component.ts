import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../../model/view/client";
import {ClientsProviderRequest} from "../clients-provider-request";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

    client: Client;
    provider: ClientsProviderRequest;
    showProviderDetails: boolean = false;

    constructor(private route: ActivatedRoute,
                private clientService: ClientService,
                private router: Router) {
    }

    ngOnInit() {
        this.getClientById();
        this.getProvidersByClientId();
    }

    getClientById(): void {
        const id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.clientService.getClientDetail(id)
            .subscribe(client => this.client = client);
    }

    getProvidersByClientId(): void {
        const id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.clientService.getProviderByClientId(id)
            .subscribe(provider => this.provider = provider);
    }

    seeProviderDetails() {
        this.showProviderDetails = !this.showProviderDetails;
    }

    goToClientsList() {
        this.router.navigate(['configuration/clients']);
    }

    goToClientEditForm() {
        this.router.navigate(['configuration/clients/edit/', this.client.id]);
    }


}
