import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { TopNavbarBottomComponent } from './components/top-navbar-bottom/top-navbar-bottom.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PartnerUsComponent } from './components/partner-us/partner-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: HomePageComponent 
      },
      {
        path: 'login', component: LoginComponent 
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
    LoginComponent,
    TopNavbarComponent,
    TopNavbarBottomComponent,
    ContactUsComponent,
    PartnerUsComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
  
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    
  ]
})
export class HomeModule { }
