import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/core/authentication/permissions.service';
import { SideNavBarService } from '../../side-nav.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    public sidenavservice: SideNavBarService,
    private permissions: PermissionsService
  ) { }
  
  isAdmin = true;
  // isAdmin = this.permissions.isAdmin();
  // isSupervisor = this.permissions.isSupervisor();
  // isAgent = this.permissions.isAgent();
  ngOnInit(): void {

  }

}
