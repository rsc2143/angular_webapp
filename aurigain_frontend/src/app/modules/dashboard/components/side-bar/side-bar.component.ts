import { Component, OnInit } from '@angular/core';
import { SideNavBarService } from '../../side-nav.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    public sidenavservice: SideNavBarService
  ) { }
  // hideSideNav: boolean = false;


  // toggleSideNav(): void {
  //   this.hideSideNav = !this.hideSideNav;
  // }
  ngOnInit(): void {

		// $(document).ready(function () {
		// 	$('#sidebarCollapse').on('click', function () {
		// 		$('#sidebar').toggleClass('active');
		// 	});
		// });
  }

}
