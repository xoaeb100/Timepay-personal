import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankReconComponent } from './bank-recon.component';

describe('BankReconComponent', () => {
  let component: BankReconComponent;
  let fixture: ComponentFixture<BankReconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankReconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
