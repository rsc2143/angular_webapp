import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepaymentDetailsComponent } from './view-repayment-details.component';

describe('ViewRepaymentDetailsComponent', () => {
  let component: ViewRepaymentDetailsComponent;
  let fixture: ComponentFixture<ViewRepaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRepaymentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
