import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAdjustmentComponent } from './member-adjustment.component';

describe('MemberAdjustmentComponent', () => {
  let component: MemberAdjustmentComponent;
  let fixture: ComponentFixture<MemberAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAdjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
