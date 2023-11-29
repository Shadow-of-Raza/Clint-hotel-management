import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSetupComponent } from './room-setup.component';

describe('RoomSetupComponent', () => {
  let component: RoomSetupComponent;
  let fixture: ComponentFixture<RoomSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomSetupComponent]
    });
    fixture = TestBed.createComponent(RoomSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
