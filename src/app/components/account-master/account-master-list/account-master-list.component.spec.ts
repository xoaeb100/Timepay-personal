import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMasterListComponent } from './account-master-list.component';

describe('AccountMasterListComponent', () => {
  let component: AccountMasterListComponent;
  let fixture: ComponentFixture<AccountMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMasterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
