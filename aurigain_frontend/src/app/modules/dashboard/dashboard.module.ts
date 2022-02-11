import { ApplicationApprovalComponent } from './components/leads/application-approval/application-approval.component';
import { UpdateStatusComponent } from './components/leads/update-status/update-status.component';
import { ViewApplicationComponent } from './components/leads/view-application/view-application.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { RoleMappingComponent } from './components/role-mapping/role-mapping.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgentMappingComponent } from './components/agent-mapping/agent-mapping.component';
import { AgentPerformanceComponent } from './components/agent-performance/agent-performance.component';
import { CommissionSettingComponent } from './components/commission-setting/commission-setting.component';
import { CommissionReversalComponent } from './components/commission-reversal/commission-reversal.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BanksComponent } from './components/banks/banks.component';
import { AddBanksComponent } from './components/add-banks/add-banks.component';


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
      { 
        path: 'balance-transfer-leads/add-update', component: AddBalanceTransferLeadsComponent
      },
      { 
        path: 'manager/banks', component: BanksComponent
      },
      { 
        path: 'manager/banks/add-bank', component: AddBanksComponent
      },
      { 
        path: 'view-applications', component: ViewApplicationComponent
      },
      { 
        path: 'update-status', component: UpdateStatusComponent
      },
      { 
        path: 'application-aaproval', component: ApplicationApprovalComponent
      },
      { 
        path: 'user-list', component: UserListComponent
      },
      { 
        path: 'user-roles', component: UserRolesComponent
      },
      { 
        path: 'role-mapping', component: RoleMappingComponent
      },
      { 
        path: 'reset-password', component: ResetPasswordComponent
      },
      { 
        path: 'agent-mapping', component: AgentMappingComponent
      },
      { 
        path: 'agent-performance', component: AgentPerformanceComponent
      },
      { 
        path: 'commissions-setting', component: CommissionSettingComponent
      },
      { 
        path: 'commissions-reversal', component: CommissionReversalComponent
      },
      { 
        path: 'add-user', component: AddUserComponent
      },
      { 
        path: 'edit-user/:id', component: EditUserComponent
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
    PersonalLeadsComponent,
    ViewApplicationComponent,
    UpdateStatusComponent,
    ApplicationApprovalComponent,
    UserListComponent,
    UserRolesComponent,
    RoleMappingComponent,
    ResetPasswordComponent,
    AgentMappingComponent,
    AgentPerformanceComponent,
    CommissionSettingComponent,
    CommissionReversalComponent,
    AddUserComponent,
    EditUserComponent,
    BanksComponent,
    AddBanksComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
