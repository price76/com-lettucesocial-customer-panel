import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationPlaneComponent } from './collaboration-plane.component';

describe('CollaborationPlaneComponent', () => {
  let component: CollaborationPlaneComponent;
  let fixture: ComponentFixture<CollaborationPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationPlaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
