import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCreatorPlanComponent } from './find-creator-plan.component';

describe('FindCreatorPlanComponent', () => {
  let component: FindCreatorPlanComponent;
  let fixture: ComponentFixture<FindCreatorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCreatorPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCreatorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
