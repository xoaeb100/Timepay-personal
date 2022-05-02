import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherReceiptComponent } from './other-receipt.component';

describe('OtherReceiptComponent', () => {
  let component: OtherReceiptComponent;
  let fixture: ComponentFixture<OtherReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
