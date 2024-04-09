import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedCreatorListItemComponent } from './limited-creator-list-item.component';

describe('LimitedCreatorListItemComponent', () => {
  let component: LimitedCreatorListItemComponent;
  let fixture: ComponentFixture<LimitedCreatorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedCreatorListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitedCreatorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
