import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {catchError} from 'rxjs/operators'
import { ConstantsService } from 'src/app/config/constants.service';
import { ErrorHandlerService } from '../http/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private consts: ConstantsService,
    private errorHandler: ErrorHandlerService,
    private cookie: CookieService
  ) { }

  login(data: any) {
    return this.http.post(this.consts.loginApiUrl, data)
      .pipe(
        catchError(this.errorHandler.handleError)
      );
  }
  signup(data: any) {
    return this.http.post(this.consts.signupApiUrl, data)
      .pipe(
        catchError(this.errorHandler.handleError)
      );
  }
  logout() {
    this.cookie.deleteAll('/');
    this.cookie.deleteAll();
    sessionStorage.clear();
    location.replace('/');
  }
}
