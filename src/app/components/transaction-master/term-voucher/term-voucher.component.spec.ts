import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermVoucherComponent } from './term-voucher.component';

describe('TermVoucherComponent', () => {
  let component: TermVoucherComponent;
  let fixture: ComponentFixture<TermVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
