import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../../model/view/client";
import {ActivatedRoute} from "@angular/router";
import {PagerService} from "../../_services/pager.service";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

    clients: Client[];

    // pager object
    pager: any = {};

    // paged items
    pagedClientItems: Client[];

    allClients: number;

    constructor(private clientService: ClientService,
                private route: ActivatedRoute,
                private pagerService: PagerService) {
    }

    ngOnInit() {
        this.findAllClients();
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        if (this.clients.length > 0) {
            // get pager object from service
            this.pager = this.pagerService.getPager(this.clients.length, page);

            // get current page of items
            this.pagedClientItems = this.clients.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else {
            this.pagedClientItems = this.clients;
        }
        this.allClients = this.clients.length;
    }

    findAllClients(): void {
        this.clientService.getAllClients()
            .subscribe(clients => {
                this.clients = clients;
                this.setPage(1);
            });
    }

    findLimitNumberOfClients(): void {
        this.clientService.getLimitNumberOfClients()
            .subscribe(clients => {
                this.clients = clients;
                this.setPage(1);
            });
    }

    findClientsFromBackEnd(searchInput: string): void {
        if (this.inputInSearchFieldIsNull(searchInput)) {
            this.findAllClients();
        } else {
            this.clientService.getClientsByAnyMatch(searchInput)
                .subscribe(clients => {
                    this.clients = clients;
                    this.setPage(1);
                });
        }
    }

    inputInSearchFieldIsNull(searchInput: string): boolean {
        return searchInput == "";
    }

    findDrivers(): void {
        this.clientService.getClientsByRole("0")
            .subscribe(clients => {
                this.clients = clients;
                this.setPage(1);
            });
    }

    findProviderManagers(): void {
        this.clientService.getClientsByRole("1")
            .subscribe(clients => {
                this.clients = clients;
                this.setPage(1);
            });
    }

    findSuperusers(): void {
        this.clientService.getClientsByRole("2")
            .subscribe(clients => {
                this.clients = clients;
                this.setPage(1);
            });
    }


}
