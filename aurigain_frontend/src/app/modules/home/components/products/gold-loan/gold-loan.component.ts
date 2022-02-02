import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsService } from 'src/app/config/constants.service';
@Component({
  selector: 'app-gold-loan',
  templateUrl: './gold-loan.component.html',
  styleUrls: ['./gold-loan.component.scss']
})
export class GoldLoanComponent implements OnInit {

  newLoanForm: FormGroup;
  detailForm: FormGroup;
  balanceTrasferForm: FormGroup;
  otp:number;
  isChecked:boolean = false;

  isLoanForm:boolean = true;
  isOtpForm:boolean = false;

  sendOTP(){

  }

  submitOTP(){
    console.log (this.otp);
    this.detailForm = this.formbuilder.group({
      email: ['',[Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      pinCode: [''],
      loanAmount: [''],
      weightOfGold: [''],
      dateOfLoan: [''],
    })

    this.isOtpForm = false;
  }
  constructor(
    private formbuilder: FormBuilder,
    private conts: ConstantsService,
  ) { }

  submitDetailForm(){
    const email = this.detailForm.value.email;
    const pinCode = this.detailForm.value.pinCode;
    const loanAmount = this.detailForm.value.loanAmount;
    const weightOfGold = this.detailForm.value.weightOfGold;
    const dateOfLoan = this.detailForm.value.dateOfLoan;

    let detailFormData = {
      email: email,
      pinCode: pinCode,
      loanAmount: loanAmount,
      weightOfGold: weightOfGold,
      dateOfLoan: dateOfLoan,
    }

    console.log(detailFormData);
    
  }
  get name(){
    return this.newLoanForm.get('name');
  }
  
  get phone(){
    return this.newLoanForm.get('phone');
  }

  get bName(){
    return this.balanceTrasferForm.get('name');
  }
  
  get bPhone(){
    return this.balanceTrasferForm.get('phone');
  }

  get bEmail(){
    return this.balanceTrasferForm.get('email');
  }
  get bPinCode(){
    return this.balanceTrasferForm.get('pinCode');
  }
  get bExistingLoanFrom(){
    return this.balanceTrasferForm.get('existingLoanFrom');
  }
  get bCurrentOutstandingAmount(){
    return this.balanceTrasferForm.get('currentOutstandingAmount');
  }


  submitLoanForm(){
    const name = this.newLoanForm.value.name;
    const phone = this.newLoanForm.value.phone;
    const subscribe = this.isChecked;
    
    const formData ={
      name: name,
      phone: phone,
      subscribe: subscribe,
    }

    console.log(formData);
    this.isLoanForm = false;
    this.isOtpForm = true;
  }
  
  submitBalanceTrasferForm(){
    const name = this.balanceTrasferForm.value.name;
    const phone = this.balanceTrasferForm.value.phone;
    const email = this.balanceTrasferForm.value.email;
    const pinCode = this.balanceTrasferForm.value.pinCode;
    const existingLoanFrom = this.balanceTrasferForm.value.existingLoanFrom;
    const currentOutstandingAmount = this.balanceTrasferForm.value.currentOutstandingAmount;
    const subscribe = this.isChecked;

    let formData = {
      name: name,
      email: email,
      phone: phone,
      pinCode: pinCode,
      existingLoanFrom: existingLoanFrom,
      currentOutstandingAmount: currentOutstandingAmount,
      subscribe: subscribe,
    }
    console.log(formData);
  }

  onChange(event){
    console.log(event.target.checked);
    this.isChecked = event.target.checked;
  }
  ngOnInit(): void {

    this.newLoanForm = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      phone: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      subscribe: [],
    })

    this.balanceTrasferForm = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      phone: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      email: ['',[Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      pinCode: ['',[Validators.required,]],
      existingLoanFrom: ['', [Validators.required]],
      currentOutstandingAmount: ['', [Validators.required]],
      subscribe: []
    })    

  }

}
