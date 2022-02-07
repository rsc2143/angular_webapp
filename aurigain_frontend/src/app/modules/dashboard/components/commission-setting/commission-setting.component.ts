import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-commission-setting',
  templateUrl: './commission-setting.component.html',
  styleUrls: ['./commission-setting.component.scss']
})
export class CommissionSettingComponent implements OnInit {

  supervisors = ['Naina', 'Sunaina', 'Arpit', 'Manish', 'Durgesh'];
  selectAgentForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder
  ) { }


  get agent(){
    return this.selectAgentForm.get('selectAgent');
  }
  get commissionType(){
    return this.selectAgentForm.get('selectCommissionType');
  }
  get commissionPercentage(){
    return this.selectAgentForm.get('commissionPercentage');
  }

  submitCommissionSetting(){
    const selectAgent = this.selectAgentForm.value.selectAgent;
    const selectCommissionType = this.selectAgentForm.value.selectCommissionType;
    const commissionPercentage = this.selectAgentForm.value.commissionPercentage;

    let finalData = {
      selectAgent: selectAgent,
      selectCommissionType: selectCommissionType,
      commissionPercentage: commissionPercentage
    }

    console.log(finalData);
  }
  ngOnInit(): void {
    this.selectAgentForm = this.formbuilder.group({
      selectAgent: ['', Validators.required],
      selectCommissionType: ['', Validators.required],
      commissionPercentage: ['', Validators.required]
    })
  }

}
