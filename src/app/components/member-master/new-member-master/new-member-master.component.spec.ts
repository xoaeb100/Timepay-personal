import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberMasterComponent } from './new-member-master.component';

describe('NewMemberMasterComponent', () => {
  let component: NewMemberMasterComponent;
  let fixture: ComponentFixture<NewMemberMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMemberMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
