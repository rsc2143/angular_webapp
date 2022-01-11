import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ConstantsService } from 'src/app/config/constants.service';
import { ErrorHandlerService } from '../http/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private errorHandler: ErrorHandlerService,
    private constsvc: ConstantsService,
    private http: HttpClient,
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
}
