import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedZipCodeListItemComponent } from './searched-zip-code-list-item.component';

describe('SearchedZipCodeListItemComponent', () => {
  let component: SearchedZipCodeListItemComponent;
  let fixture: ComponentFixture<SearchedZipCodeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedZipCodeListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedZipCodeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
