import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
import {Provider} from '../../../model/view/provider';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProviderRequest} from '../add-provider/provider-request';

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

    constructor(private providerService: ProviderService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProvider();
        this.providerForm = this.formBuilder.group({
            name: this.nameControl,
            city: this.cityControl,
            street: this.streetControl,
            building: this.buildingControl
        });
    }

    getProvider() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log(id);
        this.providerService.getDetail(id).subscribe(provider => this.provider = provider);
    }

    updateProvider(): void {
        this.providerRequest = this.providerForm.value;
        const id = this.route.snapshot.paramMap.get('id');
        this.providerService.update(id, this.providerRequest).subscribe(data => {
            alert("Provider was updated successfully!");
        });
    }
}
