import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileUpdateComponent } from './customer-profile-update.component';

describe('CustomerProfileUpdateComponent', () => {
  let component: CustomerProfileUpdateComponent;
  let fixture: ComponentFixture<CustomerProfileUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProfileUpdateComponent]
    });
    fixture = TestBed.createComponent(CustomerProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
