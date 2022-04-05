import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), },
  {
    path: 'client-portal',
    loadChildren: () => import('./modules/client-portal/client-portal.module').then(m => m.ClientPortalModule), },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: true
}),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
