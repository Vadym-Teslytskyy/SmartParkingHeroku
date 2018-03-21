import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from "../role";
import {Client} from "../../model/view/client";

@Component({
    selector: 'app-client-edit',
    templateUrl: './client-edit.component.html',
    styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

    client: Client;
    id: number;
    roles: Role[];
    selectedRole: string;

    constructor(private route: ActivatedRoute,
                private clientService: ClientService,
                private router: Router) {
    }

    ngOnInit() {
        this.getClientById();
        this.getRoles();
    }

    getClientById(): void {
        const id = +parseInt(this.route.snapshot.paramMap.get('id'));
        this.id = id;
        this.clientService.getClientDetailToEdit(id)
            .subscribe(client => this.client = client);
    }

    udateClientById(): void {
        this.client.role = this.selectedRole;
        this.clientService.updateClient(this.id, this.client)
            .subscribe(data => {
                alert('Client was updated successfully.');
            });
    }

    goToClientList() {
        this.router.navigate(['configuration/clients']);
    }

    getRoles(): void {
        this.roles = this.clientService.getRoles();
    }

}


