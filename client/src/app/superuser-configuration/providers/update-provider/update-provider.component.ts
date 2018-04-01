import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
import {Provider} from '../../../model/view/provider';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProviderRequest} from '../add-provider/provider-request';
import {HttpResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-update-provider',
    templateUrl: './update-provider.component.html',
    styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

    provider: Provider;
    providerRequest: ProviderRequest;
    providerForm: FormGroup;

    nameControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    cityControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    streetControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    buildingControl: FormControl = new FormControl('', [
        Validators.required, Validators.pattern('^\\d+[a-zA-Z]{0,1}$')
    ]);
    activeControl: FormControl = new FormControl('', [Validators.required]);

    constructor(private providerService: ProviderService,
                private snackBar: MatSnackBar,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProvider();
        this.providerForm = this.formBuilder.group({
            name: this.nameControl,
            city: this.cityControl,
            street: this.streetControl,
            building: this.buildingControl,
            active: this.activeControl
        });
    }

    getProvider() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.providerService.getDetail(id).subscribe(provider => this.provider = provider);
    }

    updateProvider(): void {
        this.providerRequest = this.providerForm.value;
        this.providerRequest.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.providerService.save(this.providerRequest).subscribe((response: HttpResponse<any>) => {
            this.snackBar.open('Provider updated sucsessfully.', null, {
                duration: 2000
            });
        });
    }
}
