import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConstantsService } from 'src/app/config/constants.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { NetworkRequestService } from 'src/app/core/services/network-request.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-partner-us',
  templateUrl: './partner-us.component.html',
  styleUrls: ['./partner-us.component.scss']
})
export class PartnerUsComponent implements OnInit {

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

  constructor(
    private formbuilder: FormBuilder,
    private conts: ConstantsService,
    private auth: AuthService,
    private utils: UtilsService,
    private toastr: ToastrService,
    private networkRequest: NetworkRequestService,
    
  ) { }
  errors;
  get name(){
    return this.basicDetailForm.get('name');
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
  get phoneNumber1(){
    return this.basicDetailForm.get('phoneNumber1');
  }
  get otp(){
    return this.basicDetailForm.get('otp');
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
  submitPatnerForm(){
    const name = this.partnerForm.value.name;
    const email = this.partnerForm.value.email;
    const phone = this.partnerForm.value.phone;
    const message = this.partnerForm.value.message;

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }
    console.log(formData);
  }

  submitAgentForm(){

  const name = this.basicDetailForm.value.name;
  const fatherName = this.basicDetailForm.value.fatherName;
  const dob = this.basicDetailForm.value.dob;
  const gender = this.basicDetailForm.value.gender;
  const email = this.basicDetailForm.value.email;
  const phoneNumber1 = this.basicDetailForm.value.phoneNumber1;



  const pinCode = this.addressDetailForm.value.pinCode;
  const district = this.addressDetailForm.value.district;
  const city = this.addressDetailForm.value.city;
  const state = this.addressDetailForm.value.state;
  const addressLine1 = this.addressDetailForm.value.addressLine1;
  const addressLine2 = this.addressDetailForm.value.addressLine2;

  const qualification = this.kycDetailForm.value.qualification;
  const adhaarNumber = this.kycDetailForm.value.adhaarNumber;
  const panNumber = this.kycDetailForm.value.panNumber;

  const bankName = this.bankDetailForm.value.bankName;
  const accountNumber = this.bankDetailForm.value.accountNumber;
  const ifscCode= this.bankDetailForm.value.ifscCode;
  const nameOfNominee = this.bankDetailForm.value.nameOfNominee;
  const relationshipWithNominee = this.bankDetailForm.value.relationshipWithNominee;

  const referralCode= this.refrralDetailForm.value.referralCode;

  const agentFormData ={
    name: name,
    fatherName: fatherName,
    dob: dob,
    gender: gender,
    email: email,
    phoneNumber1: phoneNumber1,

    pinCode: pinCode,
    district: district,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    city: city,
    state: state,

    qualification: qualification,
    adhaarNumber: adhaarNumber,
    panNumber: panNumber,

    bankName: bankName,
    accountNumber: accountNumber,
    ifscCode: ifscCode,
    nameOfNominee: nameOfNominee,
    relationshipWithNominee: relationshipWithNominee,

    referralCode: referralCode,
  }

  //Addition made by Rohit - Start
  const user = {
    user: {
      phonenumber: phoneNumber1,
      fullname: name
    }
  };
  if (name && phoneNumber1) {
    this.auth.register(JSON.stringify(user), '/api/users/register/').subscribe(
      user => {
        console.log("user", user);
        if (user['user']) {
          // this.bt.openModal('otp', user); 
          this.registrationData = user;
          // this.misc.sendOtp(phoneNumber1).subscribe();
          // if (!this.signupAsStudent) {
            const userData = {
              user_group: 'agent'
            }
            const decoded_token = this.utils.decodeToken(user['user']['token']);
            console.log("decoded_token ", decoded_token);
            const user_id = decoded_token['id'];
            this.networkRequest.putWithoutHeaders(userData, `/api/profile/usergroup/${user_id}/`)
            .subscribe(
              data => {
                console.log("role updated ", data);
              },
              error => {
              });
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
  console.log(agentFormData);
  }

  setStep(i) {
    this.currentStep = i;
  }

  stepUp(){
    this.currentStep += 1;
  }

  sendOTP(phoneNumber){
    console.log(phoneNumber);
    this.sentOtpField = true;
    this.verifyOtpField = false
  }
  ngOnInit(): void {
    // this.partnerForm = this.formbuilder.group({
    //   name: ['',[Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
    //   email: ['',[Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
    //   phone: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
    //   message: ['', [Validators.required,]],
    // })

    this.basicDetailForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)
        // , Validators.pattern("^[a-zA-Z\-\']+")
      ]],
      fatherName: ['', [Validators.required, Validators.minLength(2), 
        // Validators.pattern("^[a-zA-Z\-\']+")
      ]],
      dob: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      phoneNumber1: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      otp: ['', [Validators.required,]]
    })

    this.addressDetailForm = this.formbuilder.group({
      pinCode: ['', [Validators.required,]],
      addressLine1: ['', [Validators.required,]],
      addressLine2: ['', [Validators.required,]],
      city: ['', [Validators.required,]],
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

    this.refrralDetailForm = this.formbuilder.group({
      referralCode: ['']
    })


  }

}
