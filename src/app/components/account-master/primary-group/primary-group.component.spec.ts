import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryGroupComponent } from './primary-group.component';

describe('PrimaryGroupComponent', () => {
  let component: PrimaryGroupComponent;
  let fixture: ComponentFixture<PrimaryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
