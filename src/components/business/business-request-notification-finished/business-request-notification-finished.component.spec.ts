import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRequestNotificationFinishedComponent } from './business-request-notification-finished.component';

describe('BusinessRequestNotificationFinishedComponent', () => {
  let component: BusinessRequestNotificationFinishedComponent;
  let fixture: ComponentFixture<BusinessRequestNotificationFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRequestNotificationFinishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRequestNotificationFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
