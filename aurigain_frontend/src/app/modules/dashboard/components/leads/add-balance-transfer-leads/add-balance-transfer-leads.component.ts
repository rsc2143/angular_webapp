import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsService } from 'src/app/config/constants.service';

@Component({
  selector: 'app-add-balance-transfer-leads',
  templateUrl: './add-balance-transfer-leads.component.html',
  styleUrls: ['./add-balance-transfer-leads.component.scss']
})
export class AddBalanceTransferLeadsComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private conts: ConstantsService,
  ) {
    this.tabelData = [];
   }
  currentStep: number = 1; 
  personalDetails: FormGroup;
  documentDetails: FormGroup;
  jewelleryDetails: FormGroup;
  appointmentDetails: FormGroup;
  tabelData:any
  ngOnInit(): void {
    this.personalDetails = this.formbuilder.group({
      product: ['', [Validators.required,]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      fatherName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z\-\']+")]],
      dob: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern(this.conts.EMAIL_REGEXP)]],
      phoneNumber1: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      phoneNumber2: ['', [Validators.required, Validators.pattern(this.conts.PHONE.pattern)]],
      loanAmount: ['', [Validators.required,]],
      loanNumber: ['', [Validators.required,]],
      loanPurpose: ['', [Validators.required,]]
    })
  }

  stepUp(){
    console.log("clicked")
    this.currentStep +=1;
    console.log(this.currentStep);
  }
  stepDown(){
    this.currentStep-=1;
    console.log(this.currentStep);
  }

  addJewellery(){
    // const jewelleryType = this.jewelleryDetails.value.jewelleryType;
    // const quantity = this.jewelleryDetails.value.quantity;
    // const weight = this.jewelleryDetails.value.weight;
    // const karats = this.jewelleryDetails.value.karats;

    this.tabelData.push(this.jewelleryDetails.value);
    this.jewelleryDetails.reset();

  }

  removeItem(item){
    this.tabelData.forEach((value, index) => {
      if(value == item){
        this.tabelData.splice(index,1)
      }
    })
  }

  savePersonalDetails(){
    this.stepUp();
    console.log("inside save personal details")
    let personalDetailData:any;
    const product = this.personalDetails.value.product;
    const name = this.personalDetails.value.name;
    const fatherName = this.personalDetails.value.fatherName;
    const dob = this.personalDetails.value.dob;
    const gender = this.personalDetails.value.gender;
    const email = this.personalDetails.value.email;
    const phoneNumber1 = this.personalDetails.value.phoneNumber1;
    const phoneNumber2 = this.personalDetails.value.phoneNumber2;
    const loanAmount = this.personalDetails.value.loanAmount;
    const loanNumber = this.personalDetails.value.loanNumber;
    const loanPurpose = this.personalDetails.value.loanPurpose;

    personalDetailData = {
      product: product,
      name: name,
      fatherName: fatherName,
      dob: dob,
      gender: gender,
      email: email,
      phoneNumber1: phoneNumber1,
      phoneNumber2: phoneNumber2,
      loanAmount: loanAmount,
      loanNumber: loanNumber,
      loanPurpose: loanPurpose,
    }
    console.log(personalDetailData);

    this.documentDetails = this.formbuilder.group({
      documentType: ['', [Validators.required,]],
      documentNumber: ['', [Validators.required]],
      documentTypePOA: ['', [Validators.required,]],
      documentNumberPOA: ['', [Validators.required]],
      panNumber: ['', [Validators.required,]],
    })
  }
  
  saveDocumentDetails(){
    this.stepUp();
    console.log("inside save document details")
    let documentDetailData:any;
    const documentType = this.documentDetails.value.documentType;
    const documentNumber = this.documentDetails.value.documentNumber;
    const documentTypePOA = this.documentDetails.value.documentTypePOA;
    const documentNumberPOA = this.documentDetails.value.documentNumberPOA;
    const panNumber = this.documentDetails.value.panNumber;
    

    documentDetailData = {
      documentType: documentType,
      documentNumber: documentNumber,
      documentTypePOA: documentTypePOA,
      documentNumberPOA: documentNumberPOA,
      panNumber: panNumber,
    }
    console.log(documentDetailData);

    this.jewelleryDetails = this.formbuilder.group({
      jewelleryType: ['', [Validators.required,]],
      quantity: ['', [Validators.required]],
      weight: ['', [Validators.required,]],
      karats: ['', [Validators.required,]],
    })
  }

  saveJewelleryDetails(){
    this.stepUp();
    console.log(this.tabelData);
    
    this.appointmentDetails = this.formbuilder.group({
      bank: ['', [Validators.required,]],
      branch: ['', [Validators.required,]],
      dateOfAppointment: ['', [Validators.required]],
      timeOfAppointment: ['', [Validators.required,]],
    })
  }

  saveForms(){

  const product = this.personalDetails.value.product;
  const name = this.personalDetails.value.name;
  const fatherName = this.personalDetails.value.fatherName;
  const dob = this.personalDetails.value.dob;
  const gender = this.personalDetails.value.gender;
  const email = this.personalDetails.value.email;
  const phoneNumber1 = this.personalDetails.value.phoneNumber1;
  const phoneNumber2 = this.personalDetails.value.phoneNumber2;
  const loanAmount = this.personalDetails.value.loanAmount;
  const loanNumber = this.personalDetails.value.loanNumber;
  const loanPurpose = this.personalDetails.value.loanPurpose;

  const documentType = this.documentDetails.value.documentType;
  const documentNumber = this.documentDetails.value.documentNumber;
  const documentTypePOA = this.documentDetails.value.documentTypePOA;
  const documentNumberPOA = this.documentDetails.value.documentNumberPOA;
  const panNumber = this.documentDetails.value.panNumber;
  
  const bank = this.appointmentDetails.value.bank;
  const branch = this.appointmentDetails.value.branch;
  const dateOfAppointment= this.appointmentDetails.value.dateOfAppointment;
  const timeOfAppointment = this.appointmentDetails.value.timeofAppointment;

  let finalData= {
  product: product,
  name: name,
  fatherName: fatherName,
  dob: dob,
  gender: gender,
  email: email,
  phoneNumber1: phoneNumber1,
  phoneNumber2: phoneNumber2,
  loanAmount: loanAmount,
  loanNumber: loanNumber,
  loanPurpose: loanPurpose,

  documentType: documentType,
  documentNumber: documentNumber,
  documentTypePOA: documentTypePOA,
  documentNumberPOA: documentNumberPOA,
  panNumber: panNumber,
  

  jewelleryDetails: this.tabelData,

  bank: bank,
  branch: branch,
  dateOfAppointment: dateOfAppointment,
  timeOfAppointment: timeOfAppointment,
  }
  console.log("final form data", finalData);
  }
}
