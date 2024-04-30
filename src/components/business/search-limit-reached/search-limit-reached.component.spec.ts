import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLimitReachedComponent } from './search-limit-reached.component';

describe('SearchLimitReachedComponent', () => {
  let component: SearchLimitReachedComponent;
  let fixture: ComponentFixture<SearchLimitReachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLimitReachedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLimitReachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
