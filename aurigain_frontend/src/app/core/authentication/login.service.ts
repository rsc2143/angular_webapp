import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConstantsService } from 'src/app/config/constants.service';
import { ErrorHandlerService } from '../http/error-handler.service';
import { AuthService } from './auth.service';
import { ProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private errorHandler: ErrorHandlerService,
    private constsvc: ConstantsService,
    private http: HttpClient,
    private cookie: CookieService,
    private auth: AuthService,
    private router: Router,
    private profileservice: ProfileService,

  ) { }

  forgotPassword(data: any) {
    return this.http.post(this.constsvc.forgotPasswordUrl, data)
      .pipe(
        catchError(this.errorHandler.handleError)
      );
  }

  resetPassword(otp: any, data: any) {
    return this.http.put(`${this.constsvc.resetPasswordUrl}/${otp}`, data)
      .pipe(
        catchError(this.errorHandler.handleError)
      );
  }

  searchBank(ifscCode) {
    return this.http.get(`https://ifsc.razorpay.com/${ifscCode}`)
      .pipe(
        catchError(this.errorHandler.handleError)
      );
  }

  setToken(user) {
    try {
      this.cookie.set('_l_a_t', user['token'], this.constsvc.LOGIN_EXPIRY_TIME, '/');
    } catch (err) {
      this.auth.logout();
    }
  }

  processLogin(user: object) {
    console.log("process login");
    return new Observable(observer => {
      try {
        this.setToken(user);
        console.log("Token set successfully");
        this.extraSteps().subscribe({
          error: err => {
            console.log(err);
          },
          complete: () => {

            this.loginRedirect();
          }
        })
      } catch{
        // this.misc.hideLoader()
      }
    });
  }

  extraSteps(): Observable<any> {
    console.log("extra steps");
    return new Observable(observer => {
      this.profileservice.refreshProfileData().subscribe(
        data => {
          localStorage.setItem('userProfile', JSON.stringify(data));
          this.profileservice.setUserProfileValue(data);
          observer.complete()
        },
        error => {
          observer.error('failed');
        }
      )
    });

  }

  loginRedirect(){
    this.router.navigateByUrl('/dashboard');
  }
}
