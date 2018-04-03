import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Role} from "../../clients/role";
import {Provider} from "../../model/view/provider";
import {Client} from "../../model/view/client";
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from "../../clients/client.service";

@Component({
    selector: 'app-client-profile-edit',
    templateUrl: './client-profile-edit.component.html',
    styleUrls: ['./client-profile-edit.component.css']
})
export class ClientProfileEditComponent implements OnInit {

    id: number;
    client: Client;
    provider: Provider;
    providers: Provider[];
    roles: Role[];
    selectedRole: string;
    selectedProvidersId: number;
    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(private route: ActivatedRoute,
                private clientService: ClientService,
                private router: Router) {
    }

    ngOnInit() {
        this.getClientProfile();
    }

    getClientProfile(): void {
        this.clientService.getClientProfile()
            .subscribe(client => this.client = client);
    }


    udateProfile(): void {
        console.log(this.client.email);
        this.clientService.updateClientProfile(parseInt(this.client.id), this.client)
            .subscribe(data => {
                alert('Client was updated successfully.');
            });

    }

    goToProfile() {
        this.router.navigate(['profile']);
    }

    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.client.image = reader.result.split(',')[1];
                console.log(this.client.image);
            };
        }
    }

    clearFile() {
        this.client.image = null;
        this.fileInput.nativeElement.value = '';
    }


    goToPasswordEdit() {
        this.router.navigate(['profile/edit/password']);
    }

}
