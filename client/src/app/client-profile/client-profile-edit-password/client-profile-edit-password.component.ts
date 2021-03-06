import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordData} from "./password-data";
import {ClientService} from "../../clients/client.service";
import {Router} from '@angular/router';
import {InfoResponse} from "../../auth/info-response";
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

const NEW_PASSWORD = 'new_password';
const UUID_PASSWORD_CONFIRM = 'uuid_password_confirm';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value;
        let confirmPassword = AC.get('confirmPassword').value;
        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({MatchPassword: true})
        } else {
            return null
        }
    }
}

@Component({
    selector: 'app-client-profile-edit-password',
    templateUrl: './client-profile-edit-password.component.html',
    styleUrls: ['./client-profile-edit-password.component.css']
})
export class ClientProfileEditPasswordComponent implements OnInit {
    hide: boolean = true;
    passwordForm: FormGroup;
    passwordData: PasswordData;
    passwordControl: FormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
    ]);
    confirmPasswordControl: FormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
    ]);

    constructor(private formBuilder: FormBuilder,
                private clientService: ClientService,
                private snackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit() {
        this.passwordForm = this.formBuilder.group({
            password: this.passwordControl,
            confirmPassword: this.confirmPasswordControl
        }, {
            validator: PasswordValidation.MatchPassword
        });
    }

    sendConfirmation = () => {
        window.localStorage.removeItem(NEW_PASSWORD);
        window.localStorage.removeItem(UUID_PASSWORD_CONFIRM);
        this.passwordData = this.passwordForm.value;
        this.clientService.sendConfirmation().subscribe((response: InfoResponse) => {
            window.localStorage.setItem(NEW_PASSWORD,  this.passwordData.password);
            window.localStorage.setItem(UUID_PASSWORD_CONFIRM,  response.response);
            this.snackBar.open('Email with confirmation sent successfuly. Check your email and confirm new password.', null, {
              duration: 5000
            });
          }, error =>{
            this.snackBar.open('Email sending Error!', null, {
                duration: 5000
              });
          });
    }

}
