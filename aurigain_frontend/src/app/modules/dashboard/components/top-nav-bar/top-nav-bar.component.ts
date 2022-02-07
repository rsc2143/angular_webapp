import { Component, OnInit } from '@angular/core';
import { SideNavBarService } from '../../side-nav.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(
    public sidenavservice: SideNavBarService
  ) { }

  toggleVal: boolean = false;

  calltoggleSideNav() {
    this.toggleVal = !this.toggleVal;
    this.sidenavservice.toggleSideNav(this.toggleVal);
  }

  ngOnInit(): void {
  }

}
