import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { TopNavbarBottomComponent } from './components/top-navbar-bottom/top-navbar-bottom.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PartnerUsComponent } from './components/partner-us/partner-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppBootStrapModule } from 'src/app/shared/modules/bootstrap/bootstrap-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/authentication/auth.service';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: HomePageComponent 
      },
      {
        path: 'login', component: LoginUserComponent 
      },
      {
        path: 'forgot-password', component: ForgotPasswordComponent 
      },
      {
        path: 'blog', component: BlogComponent 
      },
      {
        path: 'partner-us', component: PartnerUsComponent 
      },
      {
        path: 'contact-us', component: ContactUsComponent 
      },
      {
        path: '', component: HomePageComponent 
      }
      // We will not make the below routes as footer, top-navbar and top-navbar-bottom do not have individual pages
      // {
      //   path: 'footer', component: FooterComponent 
      // },
      // {
      //   path: 'top-navbar-bottom', component: TopNavbarComponent 
      // },
      // {
      //   path: 'top-navbar', component: TopNavbarBottomComponent 
      // },
    ]
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    TopNavbarComponent,
    LoginUserComponent,
    ForgotPasswordComponent,
    TopNavbarBottomComponent,
    ContactUsComponent,
    PartnerUsComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootStrapModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    
  ],
  providers: [AuthService],
  exports: [
    RouterModule,
  ]
})
export class HomeModule { }
