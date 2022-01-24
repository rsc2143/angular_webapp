import { Component, OnInit } from '@angular/core';
import { SideNavBarService } from './side-nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle:boolean=false;
  constructor(
    public sidenavservice: SideNavBarService
  ) { }

  toggled(){
    this.toggle = !this.toggle
  }
  ngOnInit(): void {
  }

}
