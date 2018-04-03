import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Client} from '../model/view/client';
import {Role} from './role';
import {ROLES} from './mock-roles';
import {Provider} from '../model/view/provider';
import {environment} from '../../environments/environment';
import {PasswordData} from "../client-profile/client-profile-edit-password/password-data";

@Injectable()
export class ClientService {

    private clientsUrl = environment.apiUrl + '/clients';
    private clientProfile = environment.apiUrl + '/profile';

    constructor(private http: HttpClient) {
    }

    getAllClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl);
    }

    getLimitNumberOfClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl + '/clientslimit');
    }

    getClientsByAnyMatch(input: string): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl + '/findclients/' + input);
    }

    getClientsByRole(input: string): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl + '/findbyrole/' + input);
    }

    getClientDetail(id: number): Observable<Client> {
        return this.http.get<Client>(this.clientsUrl + '/' + id);
    }

    updateClient(id: number, client: Client) {
        return this.http.post(this.clientsUrl + '/update/' + id, client);
    }

    getProviders(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.clientsUrl + '/getproviders');
    }

    getProviderByClientId(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.clientsUrl + '/findprovider/' + id);
    }

    getRoles(): Role[] {
        return ROLES;
    }

    getClientProfile(): Observable<Client> {
        return this.http.get<Client>(this.clientProfile);
    }

    updateClientProfile(id: number, client: Client) {
        return this.http.post(this.clientProfile + '/update/' + id, client);
    }

    updateClientPassword(data: PasswordData): Observable<any> {
        return this.http.post(this.clientProfile + '/update/password', data);
    }

}
