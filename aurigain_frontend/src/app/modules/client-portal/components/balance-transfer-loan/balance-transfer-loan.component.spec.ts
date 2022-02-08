import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTransferLoanComponent } from './balance-transfer-loan.component';

describe('BalanceTransferLoanComponent', () => {
  let component: BalanceTransferLoanComponent;
  let fixture: ComponentFixture<BalanceTransferLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceTransferLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTransferLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
