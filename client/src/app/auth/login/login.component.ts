import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginData} from "./login-data";
import {Router} from "@angular/router";
import {Token} from "../token/token";
import {LoginService} from "./login.service";
import {TokenStorage} from "../token/token-storage";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide: boolean = true;
    loginForm: FormGroup;
    loginData: LoginData;

    emailControl: FormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordControl: FormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
    ]);

    constructor(private formBuilder: FormBuilder,
                private loginService: LoginService,
                private router: Router
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: this.emailControl,
            password: this.passwordControl
        });
    }


    login = () => {
        this.loginData = this.loginForm.value;
        this.loginService.signIn(this.loginData)
            .subscribe((token: Token)=>{
                 TokenStorage.saveToken(token.token);
                alert('You are successfully authorized');
                this.router.navigate(['/']);
                }, (error) => {
                if(error instanceof HttpErrorResponse)
                alert(error.error.response);
                }
            );
    };
}


