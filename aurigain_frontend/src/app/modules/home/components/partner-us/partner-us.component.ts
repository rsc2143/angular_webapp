import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ConstantsService } from 'src/app/config/constants.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { LoginService } from 'src/app/core/authentication/login.service';
import { NetworkRequestService } from 'src/app/core/services/network-request.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-partner-us',
  templateUrl: './partner-us.component.html',
  styleUrls: ['./partner-us.component.scss']
})
export class PartnerUsComponent implements OnInit {

  authenticationForm: FormGroup;
  isAuthenticationForm: boolean = true;
  isBasicDetailForm: boolean = false;
  otp:number;
  sentOtpField: boolean = false;
  verifyOtpField: boolean = true;
  otpVerifiedSuccessfully: boolean = false;
  partner:boolean = true;
  partnerForm: FormGroup;
  basicDetailForm: FormGroup;
  addressDetailForm: FormGroup;
  kycDetailForm: FormGroup;
  bankDetailForm: FormGroup;
  refrralDetailForm: FormGroup;
  navText:string= "Partner Us"
  currentStep:number = 1;
  registrationData;
  isOtpForm: boolean = false;
  successForm:any = [];
  formCompleted: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private conts: ConstantsService,
    private auth: AuthService,
    private utils: UtilsService,
    private toastr: ToastrService,
    private networkRequest: NetworkRequestService,
    private loginservice: LoginService,
    private cookie: CookieService,
  ) { }
  errors;
  districts;
  states;
  selectedPinCode;
  banks;

  get name(){
    return this.authenticationForm.get('name');
  }
  get phoneNumber1(){
    return this.authenticationForm.get('phoneNumber1');
  }
  get password(){
    return this.authenticationForm.get('password');
  }

  get fatherName(){
    return this.basicDetailForm.get('fatherName');
  }
  get dob(){
    return this.basicDetailForm.get('dob');
  }
  get email(){
    return this.basicDetailForm.get('email');
  }

  get gender(){
    return this.basicDetailForm.get('gender');
  }

  get pinCode(){
    return this.addressDetailForm.get('pinCode');
  }
  get addressLine1(){
    return this.addressDetailForm.get('addressLine1');
  }
  get addressLine2(){
    return this.addressDetailForm.get('addressLine2');
  }
  get city(){
    return this.addressDetailForm.get('city');
  }
  get state(){
    return this.addressDetailForm.get('state');
  }
  get district(){
    return this.addressDetailForm.get('district');
  }

  get qualification(){
    return this.kycDetailForm.get('qualification');
  }
  get panNumber(){
    return this.kycDetailForm.get('panNumber');
  }
  get adhaarNumber(){
    return this.kycDetailForm.get('adhaarNumber');
  }
  get occupation(){
    return this.kycDetailForm.get('occupation');
  }



  get bankName(){
    return this.bankDetailForm.get('bankName');
  }
  get accountNumber(){
    return this.bankDetailForm.get('accountNumber');
  }
  get ifscCode(){
    return this.bankDetailForm.get('ifscCode');
  }

  changeForm(){
    this.partner = false;
    this.navText = "Become Agent"
  }

  verifyOtp(){
    this.otpVerifiedSuccessfully = true;

  }
  // submitPatnerForm(){
  //   const name = this.partnerForm.value.name;
  //   const email = this.partnerForm.value.email;
  //   const phone = this.partnerForm.value.phone;
  //   const message = this.partnerForm.value.message;

  //   const formData = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     message: message,
  //   }
  //   console.log(formData);
  // }

  searchDistrict() {
    const pinCode = this.addressDetailForm.value.pinCode;
    this.networkRequest.getWithHeaders(`/api/districts/?pincode=${pinCode}`).subscribe(
      data => {
        this.districts = data;
        console.log("districts", this.districts);
      },
      error => {
        console.log("error", error);
      }
    );
    this.networkRequest.getWithHeaders(`/api/pincode/?pincode=${pinCode}`).subscribe(
      data => {
        this.selectedPinCode = data[0]['id'];
        this.addressDetailForm.patchValue({
          state: data[0]['state']
        })
        console.log("pincode details", data);
      },
      error => {
        console.log("error", error);
      }
    );
  }

  submitOTP(){
    this.isOtpForm = false;
    this.isBasicDetailForm = true;
  }
  submitAgentForm(){

  const name = this.authenticationForm.value.name;
  const phoneNumber1 = this.authenticationForm.value.phoneNumber1;
  const referralCode= this.authenticationForm.value.referralCode;
  const password= this.authenticationForm.value.password;

  // const city = this.addressDetailForm.value.city;

  //Addition made by Rohit - Start
  const user = {
    user: {
      phonenumber: phoneNumber1,
      fullname: name,
      password: password
    }
  };
  if (name && phoneNumber1) {
    this.auth.register(JSON.stringify(user), '/api/users/register/').subscribe(
      user => {
        console.log("user", user);
        if (user['user']) {
          // this.bt.openModal('otp', user);
          this.registrationData = user['user'];
          // this.misc.sendOtp(phoneNumber1).subscribe();
          // if (!this.signupAsStudent) {
            this.cookie.set('_l_a_t', this.registrationData['token'], this.conts.LOGIN_EXPIRY_TIME, '/');

            // this.loginservice.processLogin(user).subscribe(() => {
            // });
            const userData = {
              user_group: 'agent',
              shareReferralCode: referralCode
            }
            const decoded_token = this.utils.decodeToken(this.registrationData['token']);
            console.log("decoded_token ", decoded_token);
            const user_id = decoded_token['id'];
            // const user_id = this.registrationData['id'];
            this.updateKYCDetails(user_id);
            this.updateBankDetails(user_id);
            this.upadateProfileImage(user_id);
            // setTimeout(() => {
            this.updateProfile();
            // }, 1200);
            this.networkRequest.putWithoutHeaders(userData, `/api/profile/usergroup/${user_id}/`)
            .subscribe(
              data => {
                console.log("role updated ", data);
              },
              error => {
              });
              this.loginservice.processLogin(user).subscribe();
          // }
          // this.sendOTPRegister();
        }
      },
      error => {
        // this.misc.hideLoader()
        const emailError = error.message['email'];
        const phoneError = error.message['phonenumber'];

        this.errors = emailError ? emailError[0] : (phoneError ? phoneError[0] : '');
        this.toastr.error(this.errors, 'Error!', {
          timeOut: 4000,
        });
      }
    );
  }
  //Addition made by Rohit - end
  }

  updateProfile() {
    var firstName = '';
    var fullname = (this.authenticationForm.value.name).split(' ');
    var lastName;
    if (fullname.length > 1) {
      for (let i = 0; i < fullname.length - 1; i++) {
        if (i == 0) {
          firstName = fullname[0];
        }
        else {
          firstName = firstName + ' ' + fullname[i];
        }

      }
      lastName = fullname[fullname.length -1];
    }
    else {
      firstName = fullname[0];
      lastName = '';
    }

    const pincode = this.selectedPinCode;
    const district = this.addressDetailForm.value.district;
    // const city = this.addressDetailForm.value.city;
    const state = this.addressDetailForm.value.state;
    const addressLine1 = this.addressDetailForm.value.addressLine1;
    const addressLine2 = this.addressDetailForm.value.addressLine2;
    const fatherName = this.basicDetailForm.value.fatherName;
    const dob = this.basicDetailForm.value.dob;
    const gender = this.basicDetailForm.value.gender;
    const email = this.basicDetailForm.value.email;

    const formData = {
      first_name: firstName,
      last_name: lastName || '',
      address_line1: addressLine1 || null,
      address_line2: addressLine2 || null,
      pincode: pincode,
      email: email,
      district: district,
      state: state,
      father_name: fatherName,
      gender: gender,
      dob: dob
    }

    this.networkRequest.putWithHeaders(formData, '/api/updateprofile/').subscribe(
      data => {
        // Set Profile Status
        console.log("updated", data);
        // this.getProfile();
      },
      error => {
      }
    );
  }

  updateBankDetails(userid) {
    const bankName = this.bankDetailForm.value.bankName;
    const accountNumber = this.bankDetailForm.value.accountNumber;
    const ifscCode= this.bankDetailForm.value.ifscCode;
    const nameOfNominee = this.bankDetailForm.value.nameOfNominee;
    const relationshipWithNominee = this.bankDetailForm.value.relationshipWithNominee;
    let cheque: File;
    cheque = (<HTMLInputElement>document.getElementById('cheque')).files[0];

    let formData: FormData = new FormData();
    formData.append("user", userid);
    formData.append("bank", bankName);
    formData.append("account_number", accountNumber);
    formData.append("ifsc_code", ifscCode);
    formData.append("nominee_name", nameOfNominee);
    formData.append("nominee_relation", relationshipWithNominee);
    formData.append("cancelled_cheque_image", cheque);
    this.networkRequest.postFormData(formData, '/api/createuserbank/').subscribe(
      user => {
        console.log("user bank details", user);
      },
      error => {
        this.toastr.error(this.errors, 'Error!', {
          timeOut: 4000,
        });
      }
    );
  }

  updateKYCDetails(userid) {
    const qualification = this.kycDetailForm.value.qualification;
    const adhaarNumber = this.kycDetailForm.value.adhaarNumber;
    const panNumber = this.kycDetailForm.value.panNumber;
    const occupation = this.kycDetailForm.value.occupation;
    let aadharfront: File;
    aadharfront = (<HTMLInputElement>document.getElementById('aadharfront')).files[0];
    let aadharback: File;
    aadharback = (<HTMLInputElement>document.getElementById('aadharback')).files[0];
    let panimg: File;
    panimg = (<HTMLInputElement>document.getElementById('panimg')).files[0];
    let formData: FormData = new FormData();
    formData.append("user", userid);
    formData.append("qualification", qualification);
    formData.append("aadhar_number", adhaarNumber);
    formData.append("pan_number", panNumber);
    formData.append("occupation", occupation);
    formData.append("aadhar_front_image", aadharfront);
    formData.append("aadhar_back_image", aadharback);
    formData.append("pan_image", panimg);
      this.networkRequest.postFormData(formData, '/api/userkyc/').subscribe(
        user => {
          console.log("userkyc", user);
        },
        error => {
          // this.misc.hideLoader()
          const emailError = error.message['email'];
          const phoneError = error.message['phonenumber'];

          this.errors = emailError ? emailError[0] : (phoneError ? phoneError[0] : '');
          this.toastr.error(this.errors, 'Error!', {
            timeOut: 4000,
          });
        }
      );
  }

  upadateProfileImage(userid) {

    /**
     * User Profile Update
     */

    let imageFile: File;
    imageFile = (<HTMLInputElement>document.getElementById('profilepic')).files[0];

    const formData: FormData = new FormData();
    formData.append('image', imageFile);
    console.log("aa");
    // Send User image to server
    this.networkRequest.putFiles(formData, `/api/profile/image/${userid}/`)
      .subscribe(
        data => {
        },
        error => {
        });
  }

  setStep(i) {
    this.currentStep = i;
  }

  stepUp(nextStep){
    this.successForm.push(nextStep);
    console.log(this.successForm);
    this.currentStep += 1;
  }
  submitAuthenticationForm(){
    const name = this.authenticationForm.value.name;
    const phoneNumber = this.authenticationForm.value.phoneNumber1;
    const referralCode = this.authenticationForm.value.referralCode;
    const password = this.authenticationForm.value.password;

    let formData= {
      name: name,
      phonenumber: phoneNumber,
      referralCode: referralCode,
      password: password
    }
    console.log(formData);
    this.sendOTP(phoneNumber);
    this.isAuthenticationForm = false;
    this.isOtpForm = true;
  }
  sendOTP(phoneNumber){
    console.log(phoneNumber);
    this.sentOtpField = true;
    this.verifyOtpField = false
  }

  getStates() {
    this.networkRequest.getWithHeaders(`/api/allstates/`).subscribe(
      data => {
        this.states = data;
        console.log("states", this.districts);
      },
      error => {
        console.log("error", error);
      }
    );
    this.networkRequest.getWithHeaders(`/api/bank/`).subscribe(
      data => {
        this.banks = data;
        console.log("banks", this.banks);
      },
      error => {
        console.log("error", error);
      }
    );
  }

  ngOnInit(): void {

    this.authenticationForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)
        // , Validators.pattern("^[a-zA-Z\-\']+")
      ]],
      phoneNumber1: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      referralCode: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.basicDetailForm = this.formbuilder.group({

      fatherName: ['', [Validators.required, Validators.minLength(2),
        // Validators.pattern("^[a-zA-Z\-\']+")
      ]],
      dob: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
    })

    this.addressDetailForm = this.formbuilder.group({
      pinCode: ['', [Validators.required,]],
      addressLine1: ['', [Validators.required,]],
      addressLine2: ['', [Validators.required,]],
      city: ['',],
      state: ['', [Validators.required,]],
      district: ['', [Validators.required,]],
    })

    this.kycDetailForm = this.formbuilder.group({
      qualification: [''],
      panNumber: ['', [Validators.required,]],
      adhaarNumber: ['', [Validators.required,]],
      occupation: ['', [Validators.required,]],
    })

    this.bankDetailForm = this.formbuilder.group({
      bankName: ['', [Validators.required,]],
      accountNumber: ['', [Validators.required,]],
      ifscCode: ['', [Validators.required,]],
      // nameOfNominee: ['', [Validators.required]],
      // relationshipWithNominee: ['', [Validators.required]],
    })

    this.getStates();

    // if(this.successForm.length === 3) {
    //   this.formCompleted = true;
    // }

    // this.refrralDetailForm = this.formbuilder.group({
    //   referralCode: ['']
    // })

    // this.partnerForm = this.formbuilder.group({
    //   name: ['',[Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
    //   email: ['',[Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
    //   phone: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
    //   message: ['', [Validators.required,]],
    // })

  }

}
