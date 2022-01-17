import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConstantsService } from 'src/app/config/constants.service';
import { Profile, ProfileAdapter } from '../adaptors/profile.model';
import { ErrorHandlerService } from '../http/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _userProfile$: BehaviorSubject<Profile>;
  public _userProfile: Profile;
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private adapter: ProfileAdapter,
    private consts: ConstantsService
  ) { 
    this._userProfile$ = new BehaviorSubject<Profile>(JSON.parse(localStorage.getItem('userProfile')));
  }

  setUserProfileValue(data) {
    this._userProfile$.next(data);
}

  refreshProfileData() {
    return new Observable(observer => {
        this.http.get<Array<object>>(this.consts.getUpdateProfileUrl)
            .subscribe(
                data => {
                    observer.next(this.adapter.adapt(data['data']));
                },
                error => {
                    observer.error('failed');
                }
                );
    })
  }

  setProfileData(data) {
      this.setUserProfileValue(data);
  }

  getProfileData() {
    return this.http.get(this.consts.getUpdateProfileUrl)
        .pipe(
            catchError(this.errorHandler.handleError)
        );
}

  updateProfileData(data) {
    return this.http.put(this.consts.getUpdateProfileUrl, data)
        .pipe(
            catchError(this.errorHandler.handleError)
        );
  }
  
}
