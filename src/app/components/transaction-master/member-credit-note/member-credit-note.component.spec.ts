import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCreditNoteComponent } from './member-credit-note.component';

describe('MemberCreditNoteComponent', () => {
  let component: MemberCreditNoteComponent;
  let fixture: ComponentFixture<MemberCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCreditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
