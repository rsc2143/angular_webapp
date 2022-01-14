import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { DoorStepAgentListComponent } from './components/door-step-agent-list/door-step-agent-list.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FreshLeadsComponent } from './components/leads/fresh-leads/fresh-leads.component';
import { BalanceTransferLeadsComponent } from './components/leads/balance-transfer-leads/balance-transfer-leads.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { 
        path: '', component: DashboardHomeComponent
      },
      { 
        path: 'door-step-agent', component: DoorStepAgentListComponent
      },
      { 
        path: 'fresh-leads', component: FreshLeadsComponent
      },
      { 
        path: 'balance-transfer-leads', component: BalanceTransferLeadsComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    SideBarComponent,
    DashboardFooterComponent,
    DoorStepAgentListComponent,
    TopNavBarComponent,
    FreshLeadsComponent,
    BalanceTransferLeadsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
