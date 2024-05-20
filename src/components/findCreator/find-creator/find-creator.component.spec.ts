import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCreatorComponent } from './find-creator.component';

describe('FindCreatorComponent', () => {
  let component: FindCreatorComponent;
  let fixture: ComponentFixture<FindCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
