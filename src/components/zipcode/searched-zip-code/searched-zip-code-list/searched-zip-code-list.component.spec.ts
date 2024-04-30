import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedZipCodeListComponent } from './searched-zip-code-list.component';

describe('SearchedZipCodeListComponent', () => {
  let component: SearchedZipCodeListComponent;
  let fixture: ComponentFixture<SearchedZipCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedZipCodeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedZipCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
