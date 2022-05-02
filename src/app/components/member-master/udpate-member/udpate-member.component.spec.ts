import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpateMemberComponent } from './udpate-member.component';

describe('UdpateMemberComponent', () => {
  let component: UdpateMemberComponent;
  let fixture: ComponentFixture<UdpateMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdpateMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdpateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
