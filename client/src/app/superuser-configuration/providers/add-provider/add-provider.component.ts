import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProviderRequest} from './provider-request';
import {ActivatedRoute} from '@angular/router';
import {Provider} from '../../../model/view/provider';
import {HttpResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-add-provider',
    templateUrl: './add-provider.component.html',
    styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

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

    constructor(private providerService: ProviderService,
                private snackBar: MatSnackBar,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.providerForm = this.formBuilder.group({
            name: this.nameControl,
            city: this.cityControl,
            street: this.streetControl,
            building: this.buildingControl
        });
    }

    saveProvider(): void {
        this.providerRequest = this.providerForm.value;
        this.providerService.save(this.providerRequest).subscribe((response: HttpResponse<any>) => {
            this.snackBar.open('Provider added sucsessfully.', null, {
                duration: 2000
            });
        });
        ;
    }

}
