import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Provider} from '../../model/view/provider';
import {Observable} from 'rxjs/Observable';
import {ProviderRequest} from './add-provider/provider-request';
import {ProviderListFilterParameters} from '../../model/filter/provider-list-filter-parameters';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProviderService {

    private providerUrl = environment.apiUrl + '/providers';

    constructor(private http: HttpClient) {
    }

    getAll(providerFilter: ProviderListFilterParameters): Observable<Provider[]> {
        return this.http.post<Provider[]>(this.providerUrl, providerFilter);
    }

    getDetail(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.providerUrl + '/' + id);
    }

    save(providerRequest: ProviderRequest) {
        return this.http.post(this.providerUrl + '/save', providerRequest);
    }

}
