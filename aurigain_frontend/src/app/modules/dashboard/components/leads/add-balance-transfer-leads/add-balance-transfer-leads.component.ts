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
  addressDetails: FormGroup;
  existingLoanDetails: FormGroup;
  documentUploadDetails: FormGroup;
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
    
    this.addressDetails = this.formbuilder.group({
      pinCode: ['', [Validators.required,]],
      area: ['', [Validators.required]],
      addressLine1: ['', [Validators.required,]],
      addressLine2: ['', [Validators.required]],
    })
  }

  saveAddressDetails(){
    this.stepUp();
    
    this.jewelleryDetails = this.formbuilder.group({
      jewelleryType: ['', [Validators.required,]],
      quantity: ['', [Validators.required]],
      weight: ['', [Validators.required,]],
      karats: ['', [Validators.required,]],
    })
  }
  
  saveDocumentDetails(){
    this.stepUp();

    this.existingLoanDetails = this.formbuilder.group({
      bankName: ['', [Validators.required,]],
      amountOld: ['', [Validators.required]],
      dateOld: ['', [Validators.required,]],
      valuation: ['', [Validators.required,]],
      outstandingAmount: ['', [Validators.required,]],
      balanceTransferAmount: ['', [Validators.required,]],
      requiredAmount: ['', [Validators.required,]],
      tenure: ['', [Validators.required,]],
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
  
  saveAppointmentDetails(){
    this.stepUp();
    
    
    this.documentDetails = this.formbuilder.group({
      documentType: ['', [Validators.required,]],
      documentNumber: ['', [Validators.required]],
      documentTypePOA: ['', [Validators.required,]],
      documentNumberPOA: ['', [Validators.required]],
      panNumber: ['', [Validators.required,]],
    })
    

  }

  saveExistingLoanDetails(){
    this.stepUp();
    
    this.documentUploadDetails = this.formbuilder.group({
      customerPhoto: ['', [Validators.required,]],
      blankCheck1: ['', [Validators.required]],
      blankCheck2: ['', [Validators.required]],
      kycPOI: ['', [Validators.required,]],
      kycPOA: ['', [Validators.required,]],
      loanDocument: ['', [Validators.required]],
      foreclosureLetter: ['', [Validators.required,]],
      atmWithdrawlSlip: ['', [Validators.required,]],
      promissoryNote: ['', [Validators.required,]],
      lastPageOfAgreement: ['', [Validators.required,]],
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

  const pinCode = this.addressDetails.value.pinCode;
  const area = this.addressDetails.value.area;
  const addressLine1 = this.addressDetails.value.addressLine1;
  const addressLine2 = this.addressDetails.value.addressLine2;
  
  const documentType = this.documentDetails.value.documentType;
  const documentNumber = this.documentDetails.value.documentNumber;
  const documentTypePOA = this.documentDetails.value.documentTypePOA;
  const documentNumberPOA = this.documentDetails.value.documentNumberPOA;
  const panNumber = this.documentDetails.value.panNumber;
  

  const bank = this.appointmentDetails.value.bank;
  const branch = this.appointmentDetails.value.branch;
  const dateOfAppointment= this.appointmentDetails.value.dateOfAppointment;
  const timeOfAppointment = this.appointmentDetails.value.timeofAppointment;
  
  const bankName = this.existingLoanDetails.value.bankName;
  const amountOld = this.existingLoanDetails.value.amountOld;
  const dateOld= this.existingLoanDetails.value.dateOld;
  const valuation = this.existingLoanDetails.value.valuation;
  const outstandingAmount = this.existingLoanDetails.value.outstandingAmount;
  const balanceTransferAmount = this.existingLoanDetails.value.balanceTransferAmount;
  const requiredAmount = this.existingLoanDetails.value.requiredAmount;
  const tenure = this.existingLoanDetails.value.tenure;
  
  // const customerPhoto = this.documentUploadDetails.value.customerPhoto;
  // const blankCheck1 = this.documentUploadDetails.value.blankCheck1;
  // const blankCheck2= this.documentUploadDetails.value.blankCheck2;
  // const kycPOA = this.documentUploadDetails.value.kycPOA;
  // const kyc = this.documentUploadDetails.value.kyc;
  // const loanDocument = this.documentUploadDetails.value.loanDocument;
  // const foreclosureLetter = this.documentUploadDetails.value.foreclosureLetter;
  // const atmWithdrawlSlip = this.documentUploadDetails.value.atmWithdrawlSlip;
  // const promissoryNote = this.documentUploadDetails.value.promissoryNote;
  // const lastPageOfAgreement = this.documentUploadDetails.value.lastPageOfAgreement;

  let finalData: FormData = new FormData();
  finalData.append("product", product);
  finalData.append("name", name);
  finalData.append("fatherName", fatherName);
  finalData.append("dob", dob);
  finalData.append("gender", gender);
  finalData.append("email", email);
  finalData.append("phoneNumber1", phoneNumber1);
  finalData.append("phoneNumber2", phoneNumber2);
  finalData.append("loanAmount", loanAmount);
  finalData.append("loanNumber", loanNumber);
  finalData.append("loanPurpose", loanPurpose);
  finalData.append("pinCode", pinCode);
  finalData.append("area", area);
  finalData.append("addressLine1", addressLine1);
  finalData.append("addressLine2", addressLine2);
  finalData.append("documentType", documentType);
  finalData.append("documentNumber", documentNumber);
  finalData.append("documentTypePOA", documentTypePOA);
  finalData.append("documentNumberPOA", documentNumberPOA);
  finalData.append("jewelleryDetails", this.tabelData);
  finalData.append("bank", bank);
  finalData.append("branch", branch);
  finalData.append("dateOfAppointment", dateOfAppointment);
  finalData.append("timeOfAppointment", timeOfAppointment);
  finalData.append("bankName", bankName);
  finalData.append("amountOld", amountOld);
  finalData.append("dateOld", dateOld);
  finalData.append("valuation", valuation);
  finalData.append("outstandingAmount", outstandingAmount);
  finalData.append("balanceTransferAmount", balanceTransferAmount);
  finalData.append("requiredAmount", requiredAmount);
  finalData.append("tenure", tenure);

  let customerPhoto: File;
  let blankCheck1: File;
  let blankCheck2: File;
  let kycPOI: File;
  let kycPOA: File;
  let loanDocument: File;
  let foreclosureLetter: File;
  let atmWithdrawlSlip: File;
  let promissoryNote: File;
  let lastPageOfAgreement: File;
  
  
  customerPhoto = (<HTMLInputElement>document.getElementById('customerPhoto')).files[0];
  finalData.append("cusomerPhoto", customerPhoto);
  
  blankCheck1 = (<HTMLInputElement>document.getElementById('blankCheck1')).files[0];
  finalData.append("blankCheck1", blankCheck1);
  
  blankCheck2 = (<HTMLInputElement>document.getElementById('blankCheck2')).files[0];
  finalData.append("blankCheck2", blankCheck2);
  
  kycPOI = (<HTMLInputElement>document.getElementById('kycPOI')).files[0];
  finalData.append("kycPOI", kycPOI);

  kycPOA = (<HTMLInputElement>document.getElementById('kycPOA')).files[0];
  finalData.append("kycPOA", kycPOA);

  loanDocument = (<HTMLInputElement>document.getElementById('loanDocument')).files[0];
  finalData.append("loanDocument", loanDocument);

  foreclosureLetter = (<HTMLInputElement>document.getElementById('foreclosureLetter')).files[0];
  finalData.append("foreclosureLetter", foreclosureLetter);

  atmWithdrawlSlip = (<HTMLInputElement>document.getElementById('atmWithdrawlSlip')).files[0];
  finalData.append("atmWithdrawlSlip", atmWithdrawlSlip);
  
  promissoryNote = (<HTMLInputElement>document.getElementById('promissoryNote')).files[0];
  finalData.append("promissoryNote", promissoryNote);
  
  lastPageOfAgreement = (<HTMLInputElement>document.getElementById('lastPageOfAgreement')).files[0];
  finalData.append("lastPageOfAgreement", lastPageOfAgreement);
  
  
  
  // let finalData= {
    // product: product,
    // name: name,
    // fatherName: fatherName,
    // dob: dob,
    // gender: gender,
    // email: email,
    // phoneNumber1: phoneNumber1,
    // phoneNumber2: phoneNumber2,
    // loanAmount: loanAmount,
    // loanNumber: loanNumber,
    // loanPurpose: loanPurpose,
    
    // pinCode: pinCode,
    // area: area,
    // addressLine1: addressLine1,
    // addressLine2: addressLine2,
    
    // documentType: documentType,
    // documentNumber: documentNumber,
    // documentTypePOA: documentTypePOA,
    // documentNumberPOA: documentNumberPOA,
    // panNumber: panNumber,
    
    
    // jewelleryDetails: this.tabelData,
    
    // bank: bank,
    // branch: branch,
    // dateOfAppointment: dateOfAppointment,
    // timeOfAppointment: timeOfAppointment,
    
    // bankName: bankName,
    // amountOld: amountOld,
    // dateOld: dateOld,
    // valuation: valuation,
    // outstandingAmount: outstandingAmount,
    // balanceTransferAmount: balanceTransferAmount,
    // requiredAmount: requiredAmount,
    // tenure: tenure,  
    // }
    
    

  

  // console.log("image form data", imageData);
  console.log("final form data", finalData);
  }
}
