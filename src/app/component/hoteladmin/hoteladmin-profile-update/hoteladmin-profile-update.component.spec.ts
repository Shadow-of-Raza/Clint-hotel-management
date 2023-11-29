import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminProfileUpdateComponent } from './hoteladmin-profile-update.component';

describe('HoteladminProfileUpdateComponent', () => {
  let component: HoteladminProfileUpdateComponent;
  let fixture: ComponentFixture<HoteladminProfileUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminProfileUpdateComponent]
    });
    fixture = TestBed.createComponent(HoteladminProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
