import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPortalComponent } from './client-portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { BalanceTransferLoanComponent } from './components/balance-transfer-loan/balance-transfer-loan.component';
import { FreshLoanComponent } from './components/fresh-loan/fresh-loan.component';
import { ViewLoanApplicationComponent } from './components/view-loan-application/view-loan-application.component';
import { ViewRepaymentDetailsComponent } from './components/view-repayment-details/view-repayment-details.component';

const routes: Routes = [
  {
    path: '', component: ClientPortalComponent,
    children: [
      { 
        path: '', component: FreshLoanComponent
      }, 
      { 
        path: 'balance-transfer', component: BalanceTransferLoanComponent
      },
      { 
        path: 'view-loan-application', component: ViewLoanApplicationComponent
      },
      { 
        path: 'view-repayment-details', component: ViewRepaymentDetailsComponent
      },
    ]
  }
  ];

@NgModule({
  declarations: [
    ClientPortalComponent,
    BalanceTransferLoanComponent,
    FreshLoanComponent,
    ViewLoanApplicationComponent,
    ViewRepaymentDetailsComponent
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
export class ClientPortalModule { }
