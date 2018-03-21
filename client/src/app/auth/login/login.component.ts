import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginData} from "./login-data";
import {Router} from "@angular/router";
import {ResponseToken} from "./response-token";
import {LoginService} from "./login.service";
import {TokenStorage} from "./token-storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide: boolean = true;
    loginForm: FormGroup;
    loginData: LoginData;
    error: boolean;

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
                private router: Router,
                private storage: TokenStorage
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
            .subscribe((response:ResponseToken)=>{
                    this.error=false;
                    this.storage.saveCredentials(response.token, response.role);
                    alert("Succesful authentifictaon" + response.token + "  " + response.role)
                    this.router.navigate(['/']);
                }, error2 => {
                    console.log("error");
                    this.error = true;
                }
            );
    };

}
