import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../../model/view/client";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

    clients: Client[];
    in: string;

    constructor(private clientService: ClientService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const input = (this.route.snapshot.paramMap.get('input'));
        if (input != null) {
            this.findClientsFromBackEnd(input);
        } else
            this.getLimitNumberOfClients();
    }

    getAllClients(): void {
        this.clientService.getClients()
            .subscribe(clients => this.clients = clients);
    }

    getLimitNumberOfClients(): void {
        this.clientService.getLimitNumberOfClients()
            .subscribe(clients => this.clients = clients);
    }

    findClientsFromBackEnd(searchInput: string): void {
        this.clientService.findClientsByAnyMatch(searchInput)
            .subscribe(clients => this.clients = clients);
    }

    findDrivers(): void {
        this.clientService.findClientsByAnyMatch("0")
            .subscribe(clients => this.clients = clients);
    }

    findProviderManagers(): void {
        this.clientService.findClientsByAnyMatch("1")
            .subscribe(clients => this.clients = clients);
    }

    findSuperusers(): void {
        this.clientService.findClientsByAnyMatch("2")
            .subscribe(clients => this.clients = clients);
    }


}
