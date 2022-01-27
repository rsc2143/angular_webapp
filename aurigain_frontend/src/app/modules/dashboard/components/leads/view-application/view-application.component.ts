import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
  ) { }

  selectedForm: FormGroup;
  originalArray = [
  {Id: 10018, FullName: 'Yishu', FatherName: 'Tetzzy', Email: null, type: 'approved', DateOfBirth: '0001-01-01T00:00:00',},
  {Id: 10017, FullName: 'Yishu Arora', FatherName: 'heeheh', Email: null, type: 'rejected',DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10016, FullName: 'Mohit', FatherName: 'bzbzjz', Email: null, type: 'pending',DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10015, FullName: 'gg', FatherName: 'yhg', Email: null, type: 'approved', DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10014, FullName: 'pinkj', FatherName: 'mohan', Email: null,type: 'rejected', DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10013, FullName: 'shhddh', FatherName: 'bsbdbdb', Email: null, type: 'approved',DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10012, FullName: 'JR Sachin', FatherName: 'SR Sachin', Email: 'sachin123@yopmail.com', type: 'approved', DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10011, FullName: 'testui', FatherName:  'gh', Email: null, type: 'rejected', DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10010, FullName: 'vasb', FatherName: 'bbbb', Email: null, type: 'pending', DateOfBirth: '0001-01-01T00:00:00', },
  {Id: 10009, FullName: 'Aashish Jain', FatherName: 'Ashok Kumar',  Email: 'aashish@gmail.com', type: 'rejected', DateOfBirth: '0001-01-01T00:00:00', },

  ];
  filterArray = [];
    
  filter(query: string){
    this.filterArray = [];
    console.log(query);
    
      // for (let i = 0; i < this.originalArray.length; i++) {
      //   if (this.originalArray[i]['name'] == query) {
      //     this.filterArray.push(this.originalArray[i]);
      //     console.log(this.filterArray);
      //   }
      // }
      
      this.filterArray = (query) ? this.originalArray.filter(p => p.FullName.toLowerCase().includes(query.toLowerCase())) : this.originalArray; 
      console.log(this.filterArray);
  }
    
  searchedCategory(){
    this.filterArray = [];
    let category = this.selectedForm.value.selectCategory;
    this.filterArray = (category) ? this.originalArray.filter(p => p.type.includes(category)) : this.originalArray; 
    console.log(this.filterArray);
  }
  ngOnInit(): void {
    // this.filterArray = this.originalArray;
    this.filter('');
    this.selectedForm = this.formbuilder.group({
      selectCategory: ['']    
     })
     console.log(this.originalArray);
  }

}
