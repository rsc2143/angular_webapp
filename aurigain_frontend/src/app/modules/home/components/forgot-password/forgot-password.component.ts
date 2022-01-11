import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/config/constants.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { LoginService } from 'src/app/core/authentication/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router, 
    private conts: ConstantsService,
    private authservice: AuthService,
    private loginService: LoginService,
  ) { }
  
  isForgotPasswordForm:boolean = true;
  isOtpForm:boolean= false;
  username: string;
  password: string;
  email: string;
  otp:number;
  emailForm:FormGroup;
  successMsg:any;
  errors: any;
  
  resetValidations() {
    this.errors = null;
  }

  submitPasswordOTP(){
    this.successMsg = null;
    this.errors = null;
    let username;
    if (!this.otp) {
      this.errors = "Please enter OTP";
      return;
    }
    if (this.password.length < 6) {
      this.errors = "Password can't be less than 6 characters";
      return;
    }
    const formData = {
      password: this.password
    }
    this.loginService.resetPassword(this.otp, formData).subscribe(
      data => {
        this.errors = null;
        this.successMsg = "Password reset successful... Logging in...."
        username = data['user']['username'];
        const userObj = {
          username: username,
          password: this.password
        };
        this.router.navigateByUrl['/login']
        // this.authservice.login(userObj)
        // .subscribe(
        //   user => {
        //     this.successMsg = "Logged in successfully, loading...."
        //     if (user['success']) {
        //       this.loginService.processLogin(user).subscribe();
        //     } else {
        //       this.errors = ['Account Does Not Exist'];
        //     }
        //   });
      })
  }

  resetPassword(){
    this.successMsg = null;
    this.errors = null;
    const formData = {
      email: this.email
    }
    console.log("resetPassword", formData);
    this.loginService.forgotPassword(formData).subscribe(
      data => {
        this.errors = '';
        this.successMsg = data['message'];
        setTimeout(() => {
          this.successMsg = null;
          this.errors = null;
          this.isForgotPasswordForm = false;
          this.isOtpForm = true;
        }, 2000);
      }
    )
  }

  ngOnInit(): void {
  }

}
