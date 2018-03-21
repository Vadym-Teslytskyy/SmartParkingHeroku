import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const ROLE_KEY = 'AuthTokenRole';

@Injectable()
export class TokenStorage {

    constructor() { }

    signOut() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(ROLE_KEY);
        window.localStorage.clear();
    }

    public saveCredentials(token: string, role: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(ROLE_KEY);
        window.localStorage.setItem(TOKEN_KEY,  token);
        window.localStorage.setItem(ROLE_KEY,  role);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY);
    }

    public getRole(): string {
        return localStorage.getItem(ROLE_KEY);
    }




}