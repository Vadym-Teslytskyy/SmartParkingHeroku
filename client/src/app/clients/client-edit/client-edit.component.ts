import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from "../role";
import {Client} from "../../model/view/client";
import {Provider} from "../../model/view/provider";
import {ProviderService} from "../../superuser-configuration/providers/provider.service";

@Component({
    selector: 'app-client-edit',
    templateUrl: './client-edit.component.html',
    styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

    id: number;
    client: Client;
    provider: Provider;
    providers: Provider[];
    roles: Role[];
    selectedRole: string;
    selectedProvidersId: number;

    constructor(private route: ActivatedRoute,
                private clientService: ClientService,
                private router: Router) {
    }

    ngOnInit() {
        this.getClientById();
        this.getRoles();
        this.getProviders();
    }

    getClientById(): void {
        const id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.id = id;
        this.clientService.getClientDetail(id)
            .subscribe(client => this.client = client);
    }

    getProviders(): void {
        this.clientService.getProviders()
            .subscribe(providers => this.providers = providers);
    }

    udateClientById(): void {
        if (this.selectedRole != null) {
            this.client.role = this.selectedRole;
        }
        if (this.selectedProvidersId != null) {
            this.client.providersId = this.selectedProvidersId;
        }
        if (this.selectedRole == 'PROVIDER_MANAGER' && this.selectedProvidersId == null) {
            alert('pleace, select provider')
        } else {
            if (this.selectedRole == 'DRIVER' || this.selectedRole == 'SUPERUSER') {
                this.client.providersId = 0;
            }
            this.clientService.updateClient(this.id, this.client)
                .subscribe(data => {
                    alert('Client was updated successfully.');
                });
        }
    }

    goToClientList() {
        this.router.navigate(['configuration/clients']);
    }

    getRoles(): void {
        this.roles = this.clientService.getRoles();
    }

}