import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { 
        path: '', component: DashboardHomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
