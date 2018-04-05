import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Token} from "./token";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

const TOKEN_KEY = 'access_token';
const helper = new JwtHelperService();


@Injectable()
export class TokenStorage {

    constructor() {
    }

    public static signOut() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    }

    public static saveToken(token: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    public static getToken(): string {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    public static getRole(): string {
        if(!TokenStorage.hasToken()) {
            return '';
        }
        return TokenStorage.decodeToken().authorities[0].authority;
    }


    public static getUsername(): string {
        return TokenStorage.decodeToken().username;
    }

    private static decodeToken(): any {
        return helper.decodeToken(TokenStorage.getToken());
    }

    public static hasToken(): boolean {
        return TokenStorage.getToken() != null;
    }
}