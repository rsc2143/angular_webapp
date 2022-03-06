import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-approval-detail',
  templateUrl: './agent-approval-detail.component.html',
  styleUrls: ['./agent-approval-detail.component.scss']
})
export class AgentApprovalDetailComponent implements OnInit {

  image = {
    url: ['https://www.w3schools.com/css/img_forest.jpg', 'https://www.w3schools.com/css/img_5terre.jpg', 'https://www.w3schools.com/css/img_lights.jpg', 'https://www.w3schools.com/css/img_lights.jpg']
  }
  constructor() { }

  isImagePreview:boolean = false;
  previewImg = null;

  previewImage(path){
    this.isImagePreview = true;
    this.previewImg = path;
  }
  ngOnInit(): void {
  }

}
