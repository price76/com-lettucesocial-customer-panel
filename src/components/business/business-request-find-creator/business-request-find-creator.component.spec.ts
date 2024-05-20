import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRequestFindCreatorComponent } from './business-request-find-creator.component';

describe('BusinessRequestFindCreatorComponent', () => {
  let component: BusinessRequestFindCreatorComponent;
  let fixture: ComponentFixture<BusinessRequestFindCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRequestFindCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRequestFindCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
