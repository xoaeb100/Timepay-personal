import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReceiptComponent } from './member-receipt.component';

describe('MemberReceiptComponent', () => {
  let component: MemberReceiptComponent;
  let fixture: ComponentFixture<MemberReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
