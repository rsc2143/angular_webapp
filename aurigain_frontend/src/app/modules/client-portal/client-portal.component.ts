import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.scss']
})
export class ClientPortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Inside ClientPortalComponent");
  }
  
}
