import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-mapping',
  templateUrl: './role-mapping.component.html',
  styleUrls: ['./role-mapping.component.scss']
})
export class RoleMappingComponent implements OnInit {

  roleMappingForm:FormGroup;
  Roles:any = ['supervisor', 'client', 'agent'];
  constructor(
    private formbuilder: FormBuilder,
  ) { }

  submitRoleMapping(){
    const selectRole = this.roleMappingForm.value.selectRole;
    const dashboard = this.roleMappingForm.value.dashboard;
    const leads = this.roleMappingForm.value.leads;
    const master = this.roleMappingForm.value.master;
    const commission = this.roleMappingForm.value.commission;
    const employeeManagement = this.roleMappingForm.value.employeeManagement;
    const customerManagement = this.roleMappingForm.value.customerManagement;

    let formData = {
      selectRole: selectRole,
      dashboard: dashboard,
      leads: leads,
      master: master,
      commission: commission,
      employeeManagement: employeeManagement,
      customerManagement: customerManagement
    }
    console.log(formData);
  }

  ngOnInit(): void {

    this.roleMappingForm = this.formbuilder.group({
      selectRole: ['', Validators.required],
      dashboard: [false],
      leads: [false],
      master: [false],
      commission: [false],
      employeeManagement: [false],
      customerManagement: [false],
    })
  }

}
