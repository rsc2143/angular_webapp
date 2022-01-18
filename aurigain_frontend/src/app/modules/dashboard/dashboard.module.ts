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
import { AddFreshLeadsComponent } from './components/leads/add-fresh-leads/add-fresh-leads.component';
import { AddBalanceTransferLeadsComponent } from './components/leads/add-balance-transfer-leads/add-balance-transfer-leads.component';
import { PersonalLeadsComponent } from './components/leads/personal-leads/personal-leads.component';
import { AddPersonalLeadsComponent } from './components/leads/add-personal-leads/add-personal-leads.component';
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
        path: 'fresh-leads/add-update', component: AddFreshLeadsComponent
      },
      { 
        path: 'personal-leads', component: PersonalLeadsComponent
      },
      { 
        path: 'personal-leads/add-update', component: AddPersonalLeadsComponent
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
    BalanceTransferLeadsComponent,
    AddFreshLeadsComponent,
    AddBalanceTransferLeadsComponent,
    PersonalLeadsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
