import {Injectable} from '@angular/core';
import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {TokenStorage} from './auth/token/token-storage';
import {Router} from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.startsWith('http://localhost:8080/') && (TokenStorage.getToken())) {
            request = request.clone({
                headers: request.headers.append('Authorization', `Bearer ${TokenStorage.getToken()}`)
            });
        }
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (error: any) => {
            if (error instanceof HttpErrorResponse) {

            }
        });
    }

}
