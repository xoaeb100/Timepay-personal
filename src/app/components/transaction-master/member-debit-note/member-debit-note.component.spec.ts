import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDebitNoteComponent } from './member-debit-note.component';

describe('MemberDebitNoteComponent', () => {
  let component: MemberDebitNoteComponent;
  let fixture: ComponentFixture<MemberDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDebitNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
