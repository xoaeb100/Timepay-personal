import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralVoucherComponent } from './general-voucher.component';

describe('GeneralVoucherComponent', () => {
  let component: GeneralVoucherComponent;
  let fixture: ComponentFixture<GeneralVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
