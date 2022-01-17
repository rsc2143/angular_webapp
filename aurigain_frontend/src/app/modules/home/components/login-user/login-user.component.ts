import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { LoginService } from 'src/app/core/authentication/login.service';
import { ConstantsService } from 'src/app/config/constants.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  
  constructor(
    private formbuilder: FormBuilder,
    private router: Router, 
    private conts: ConstantsService,
    private authservice: AuthService,
    private loginservice: LoginService
    
    ) { }
    
  isLoginForm:boolean= true;
  username: string;
  password: string;
  email: string;
  otp:number;
  emailForm:FormGroup;
  successMsg:any;
  errors: any;
  signupForm: FormGroup;
  loginForm: FormGroup;
  

  switchRegisterForm(){
    this.isLoginForm = false;
    this.signupForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      email: ['', [Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contactNumber: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]]
    })
  }
  switchToLoginForm(){
    this.isLoginForm = true;
  }

  resetValidations() {
    this.errors = null;
  }
  signUp() {
    let finalData: any;
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const contactNumber = this.signupForm.value.contactNumber;

    const password = this.signupForm.value.password;

   
    finalData = {
      name: name,
      email: email,
      contactNumber: contactNumber,
      password: password,
    }
    
    console.log("finalData ", finalData);
    

    this.authservice.signup(finalData)
      .subscribe(
        user => {
          console.log(user, "student add")
          localStorage.setItem('token', user['token']);
          this.switchToLoginForm();
        },
        error => {
          console.log("Error section")
          this.errors = error['message']['error']['message'];
          console.log(this.errors);
          if (this.errors == 'Duplicate Field Value Entered'){
            this.errors = 'Phonenumber already exist'
          }
        }
      );
  }
  login(){
    this.successMsg = null;
    this.errors = null;
    const username = this.username;
    const password = this.password;

    if(!username || !password){
      this.errors = "Please enter a username and password";
    }
    else if(!username){
      this.errors = "Please enter a username"
    }
    else if(!password){
      this.errors = "Please enter a password"
    }
    if(username && password){
      const userObj ={
        email: username,
        password: password
      }
      console.log(userObj);
      this.authservice.login(userObj).subscribe(
        user=> {
          console.log(user)
          this.errors = '';
          console.log("login");
          this.successMsg = "Logged in successfully, loading...."
          this.loginservice.processLogin(user).subscribe();
          // localStorage.setItem('token', user['token']);
          // this.router.navigate(['/dashboard']);
          
        },
        error => {
          console.log("errorsection", error);
          this.successMsg = '';
          this.errors = error['message'];
          console.log(error, "aa ", error['message']);
        }
      )
    }
  }
  
  ngOnInit(): void {
    this.username = ''
    this.password = ''
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
