import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillMasterListComponent } from './bill-master-list.component';

describe('BillMasterListComponent', () => {
  let component: BillMasterListComponent;
  let fixture: ComponentFixture<BillMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillMasterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
