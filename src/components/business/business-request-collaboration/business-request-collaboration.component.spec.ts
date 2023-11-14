import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRequestCollaborationComponent } from './business-request-collaboration.component';

describe('BusinessRequestCollaborationComponent', () => {
  let component: BusinessRequestCollaborationComponent;
  let fixture: ComponentFixture<BusinessRequestCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRequestCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRequestCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
