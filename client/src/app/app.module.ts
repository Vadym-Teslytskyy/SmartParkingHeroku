import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule
} from '@angular/material';

import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppNavbarHeaderComponent} from './app-navbar-header/app-navbar-header.component';
import {ParkingListComponent} from './index/parking-list/parking-list.component';
import {ParkingService} from './parking.service';
import {ManagerParkingService} from './manager/manager-parking.service';

import {AppRoutingModule} from './app-routing.module';
import {SuperuserConfigurationComponent} from './superuser-configuration/superuser-configuration.component';
import {ParkingDetailComponent} from './parking-detail/parking-detail.component';
import {ProviderService} from './superuser-configuration/providers/provider.service';
import {ClientsComponent} from './clients/clients.component';
import {ClientListComponent} from './clients/client-list/client-list.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {ClientService} from './clients/client.service';
import {ClientItemComponent} from './clients/client-list/client-item/client-item.component';
import {ProviderListComponent} from './superuser-configuration/providers/provider-list/provider-list.component';
import {ProviderDetailComponent} from './superuser-configuration/providers/provider-detail/provider-detail.component';
import {AddProviderComponent} from './superuser-configuration/providers/add-provider/add-provider.component';
import {FilterPipe} from './clients/client-list/filter.pipe';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {LoginComponent} from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './auth/registration/registration.component';
import {AngularMaterialsModule} from './angular-materials.module';
import {IndexComponent} from './index/index.component';
import {ParkingListFilterComponent} from './index/parking-list-filter/parking-list-filter.component';
import {ManagerParkingConfigureComponent} from './manager/manager-parking-configure/manager-parking-configure.component';
import {ManagerParkingListComponent} from './manager/manager-parking-list/manager-parking-list.component';

import {InterceptorService} from "./interceptor.service";
import {AgmCoreModule} from '@agm/core';
import {LoginService} from './auth/login/login.service';
import {RegistrationService} from './auth/registration/registration.service';
import {TokenStorage} from './auth/token/token-storage';
import {LocationFieldComponent} from './index/parking-list-filter/location-field/location-field.component';
import {IpLocationService} from './service/ip-location.service';
import {RadiusFieldComponent} from './index/parking-list-filter/radius-field/radius-field.component';
import {MatSliderModule} from '@angular/material/slider';
import {PriceRangeFieldComponent} from './index/parking-list-filter/price-range-field/price-range-field.component';
import {UpdateProviderComponent} from './superuser-configuration/providers/update-provider/update-provider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PagerService} from './_services/pager.service';
import {MatRadioModule} from '@angular/material/radio';
import {DeleteConfirmationDialogComponent} from './manager/manager-parking-list/delete-confirmation-dialog/delete-confirmation-dialog.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {ClientProfileEditComponent} from './client-profile/client-profile-edit/client-profile-edit.component';
import {ClientProfileEditPasswordComponent} from './client-profile/client-profile-edit-password/client-profile-edit-password.component';
import {FavoritesAddConfigmDialogComponent} from './parking-detail/favorites-add-configm-dialog/favorites-add-configm-dialog.component';
import {ParkingMapComponent} from './index/parking-map/parking-map.component';
import {StatisticComponent} from './statistic/statistic.component';
import {ParkingStatisticComponent} from './statistic/parking-statistic/parking-statistic.component';

/*export function tokenGetter() {
    return localStorage.getItem('access_token');
}*/

@NgModule({
    declarations: [
        IndexComponent,
        AppComponent,
        AppNavbarHeaderComponent,
        ParkingListComponent,
        SuperuserConfigurationComponent,
        ParkingDetailComponent,
        SuperuserConfigurationComponent,
        ClientsComponent,
        ClientListComponent,
        ClientEditComponent,
        ClientItemComponent,
        ProviderListComponent,
        LoginComponent,
        RegistrationComponent,
        ProviderDetailComponent,
        ParkingListFilterComponent,
        ManagerParkingConfigureComponent,
        ManagerParkingListComponent,
        AddProviderComponent,
        FilterPipe,
        ClientDetailComponent,
        LocationFieldComponent,
        RadiusFieldComponent,
        PriceRangeFieldComponent,
        UpdateProviderComponent,
        ParkingMapComponent,
        DeleteConfirmationDialogComponent,
        ClientProfileComponent,
        ClientProfileEditComponent,
        ClientProfileEditPasswordComponent,
        FavoritesAddConfigmDialogComponent,
        StatisticComponent,
        ParkingStatisticComponent
    ],
    imports: [
        /* AgmCoreModule.forRoot({
             apiKey: 'AIzaSyDLIMvbPlry-zu4nLaSaYeAKW7Xjgum74I',
             libraries: ['places']
         }),*/
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB-ceTN3C1MJaUsAjPSKdXzGr11i-Ob7xU'
        }),
        /*JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:8080'],
                blacklistedRoutes: []
            }
        }),*/
        HttpClientModule,
        BrowserModule,
        RouterModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMaterialsModule,
        MatSelectModule,
        CommonModule,
        MatAutocompleteModule,
        AngularMaterialsModule,
        MatDividerModule,
        MatExpansionModule,
        MatButtonModule,
        MatSliderModule,
        MatProgressSpinnerModule,
        MatRadioModule
    ],
    entryComponents: [DeleteConfirmationDialogComponent, FavoritesAddConfigmDialogComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
        ,
        ParkingService,
        ManagerParkingService,
        ProviderService,
        ClientService,
        LoginService,
        RegistrationService,
        TokenStorage,
        IpLocationService,
        PagerService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
