import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHeadsComponent } from './category-heads.component';

describe('CategoryHeadsComponent', () => {
  let component: CategoryHeadsComponent;
  let fixture: ComponentFixture<CategoryHeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryHeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
