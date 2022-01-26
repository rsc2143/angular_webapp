import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-us',
  templateUrl: './partner-us.component.html',
  styleUrls: ['./partner-us.component.scss']
})
export class PartnerUsComponent implements OnInit {
 
  partner:boolean = true;

  navText:string= "Partner Us"
  constructor() { }

  changeForm(){
    this.partner = false;
    this.navText = "Become Agent"
  }

  ngOnInit(): void {
  }

}
