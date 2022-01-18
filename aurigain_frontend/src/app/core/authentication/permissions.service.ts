import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UtilsService } from '../services/utils.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private cookie: CookieService,
    private utils: UtilsService,
    private auth: AuthService 
  ) { }


  isauthenticated(): boolean {
    const token = this.cookie.get('_l_a_t');
    if (!token) {
      return false;
    }

    const date = this.utils.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    if (date.valueOf() > new Date().valueOf()) {
      return true;
    } else {
      this.auth.logout();
      return false;
    }
  }

  isAdmin() {
    const token = this.cookie.get('_l_a_t');
    const decodeToken = this.utils.decodeToken(token);
    // Check user type only if authenticated
    if (true) {
      //use  this.isauthenticated() inside if statement
      try {
        console.log("decoded token is:", decodeToken);
        const userType = decodeToken['role'];
        console.log(userType);
        if (userType.includes('admin') || userType.includes('superadmin')) {
          console.log("superadminabab");
          return true;
        }
      } catch (e) {
        this.auth.logout();
        return false;
      }
    } else {
      return false;
    }

  }

  isSupervisor() {
    const token = this.cookie.get('_l_a_t');
    const decodeToken = this.utils.decodeToken(token);
    // Check user type only if authenticated
    if (this.isauthenticated()) {
      try {
        const userType = decodeToken['role'];
        if (userType.includes('supervisor')) {
          return true;
        }
      } catch (e) {
        this.auth.logout();
        return false;
      }
    } else {
      return false;
    }
  }

  isAgent() {
    const token = this.cookie.get('_l_a_t');
    const decodeToken = this.utils.decodeToken(token);
    // Check user type only if authenticated
    if (this.isauthenticated()) {
      try {
        const userType = decodeToken['role'];
        if (userType.includes('agent')) {
          return true;
        }
      } catch (e) {
        this.auth.logout();
        return false;
      }
    } else {
      return false;
    }
  }

}
