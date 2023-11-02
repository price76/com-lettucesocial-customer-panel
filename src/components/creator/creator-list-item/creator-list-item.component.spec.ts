import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListItemComponent } from './creator-list-item.component';

describe('CreatorListItemComponent', () => {
  let component: CreatorListItemComponent;
  let fixture: ComponentFixture<CreatorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
