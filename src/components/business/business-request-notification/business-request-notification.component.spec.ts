import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRequestNotificationComponent } from './business-request-notification.component';

describe('BusinessRequestNotificationComponent', () => {
  let component: BusinessRequestNotificationComponent;
  let fixture: ComponentFixture<BusinessRequestNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRequestNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRequestNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
