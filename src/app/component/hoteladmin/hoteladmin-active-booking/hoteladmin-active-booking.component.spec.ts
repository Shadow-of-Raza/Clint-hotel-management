import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminActiveBookingComponent } from './hoteladmin-active-booking.component';

describe('HoteladminActiveBookingComponent', () => {
  let component: HoteladminActiveBookingComponent;
  let fixture: ComponentFixture<HoteladminActiveBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminActiveBookingComponent]
    });
    fixture = TestBed.createComponent(HoteladminActiveBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
