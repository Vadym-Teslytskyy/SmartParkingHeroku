import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../../model/view/client";
import {Router, ActivatedRoute} from '@angular/router';
import {Provider} from "../../model/view/provider";

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

    client: Client;
    provider: Provider;
    showProviderDetails: boolean = false;

    constructor(private route: ActivatedRoute,
                private clientService: ClientService,
                private router: Router) {
    }

    ngOnInit() {
        this.getClientById();
    }

    getClientById(): void {
        const id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.clientService.getClientDetail(id)
            .subscribe(client => this.client = client);
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

    goToProvidersDetails() {
        this.router.navigate(['configuration/providers/', this.client.providersId]);
    }


}
