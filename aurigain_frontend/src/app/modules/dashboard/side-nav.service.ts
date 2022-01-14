import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavBarService {

  hideSideNav: boolean = false;


  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
  constructor(  ) { }


}
