import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorFilterComponent } from './creator-filter.component';

describe('CreatorFilterComponent', () => {
  let component: CreatorFilterComponent;
  let fixture: ComponentFixture<CreatorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
