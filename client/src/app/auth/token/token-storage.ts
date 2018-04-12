import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenPair} from "./token-pair";

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const helper = new JwtHelperService();


@Injectable()
export class TokenStorage {

    private accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);
    private refreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);
    private decodedToken;

    constructor() {
    }

    public signOut() {
        window.localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.localStorage.clear();
        this.accessToken = null;
        this.refreshToken = null;
        this.decodedToken = null;
    }

    public saveToken(token: TokenPair) {
        this.signOut();
        window.localStorage.setItem(ACCESS_TOKEN_KEY, token.accessToken);
        window.localStorage.setItem(REFRESH_TOKEN_KEY, token.refreshToken);
        this.accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);
        this.refreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);
        this.decodedToken = this.decodeToken();
    }

    public getAccessToken(): string {
        return this.accessToken;
    }

    public getRefreshToken(): string {
        return this.refreshToken;
    }

    public isExpired(): boolean {
        if(this.accessToken == null) {
            return false;
        }
        return helper.isTokenExpired(this.accessToken);
    }

    public getRole(): string {
        if(!this.hasToken()) {
            return '';
        }
        return this.decodeToken().authorities[0].authority;
    }

    public getUsername(): string {
        return this.decodeToken().username;
    }

    private decodeToken(): any {
        return helper.decodeToken(this.accessToken);
    }

    public hasToken(): boolean {
        return this.refreshToken != null;
    }
}