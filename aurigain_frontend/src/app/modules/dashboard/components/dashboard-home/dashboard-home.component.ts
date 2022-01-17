import { Component, OnInit } from '@angular/core';
import { SideNavBarService } from '../../side-nav.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(
    public sidenavservice: SideNavBarService,
   
  ) { }

  ngOnInit(): void {
  }
  
}
