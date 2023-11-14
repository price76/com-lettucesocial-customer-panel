import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCollaborationComponent } from './request-collaboration.component';

describe('RequestCollaborationComponent', () => {
  let component: RequestCollaborationComponent;
  let fixture: ComponentFixture<RequestCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
