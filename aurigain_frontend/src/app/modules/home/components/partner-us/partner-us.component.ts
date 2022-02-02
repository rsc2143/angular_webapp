import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsService } from 'src/app/config/constants.service';

@Component({
  selector: 'app-partner-us',
  templateUrl: './partner-us.component.html',
  styleUrls: ['./partner-us.component.scss']
})
export class PartnerUsComponent implements OnInit {
 
  partner:boolean = true;
  partnerForm: FormGroup;
  basciDetailForm: FormGroup;
  addressDetailForm: FormGroup;
  kycDetailForm: FormGroup;
  bankDetailForm: FormGroup;
  refrralDetailForm: FormGroup;
  navText:string= "Partner Us"
  currentStep:number = 1;
  constructor(
    private formbuilder: FormBuilder,
    private conts: ConstantsService,
  ) { }

  changeForm(){
    this.partner = false;
    this.navText = "Become Agent"

    this.basciDetailForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      fatherName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      dob: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      phoneNumber1: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
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

    })
    
    this.bankDetailForm = this.formbuilder.group({
      bankName: ['', [Validators.required,]],
      accountNumber: ['', [Validators.required,]],
      ifscCode: ['', [Validators.required,]],
      nameOfNominee: ['', [Validators.required]],
      relationshipWithNominee: ['', [Validators.required]],
    })
    
    this.refrralDetailForm = this.formbuilder.group({
      referralCode: ['']
    })
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
    
  const name = this.basciDetailForm.value.name;
  const fatherName = this.basciDetailForm.value.fatherName;
  const dob = this.basciDetailForm.value.dob;
  const gender = this.basciDetailForm.value.gender;
  const email = this.basciDetailForm.value.email;
  const phoneNumber1 = this.basciDetailForm.value.phoneNumber1;
  

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

  console.log(agentFormData);
  }

  setStep(i) {
    this.currentStep = i;
  }

  stepUp(){
    this.currentStep += 1;
  }
  ngOnInit(): void {
    this.partnerForm = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      email: ['',[Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      phone: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      message: ['', [Validators.required,]],
    })
  }

}
