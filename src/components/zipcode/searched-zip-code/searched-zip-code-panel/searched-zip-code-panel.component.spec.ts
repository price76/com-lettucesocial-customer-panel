import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedZipCodePanelComponent } from './searched-zip-code-panel.component';

describe('SearchedZipCodePanelComponent', () => {
  let component: SearchedZipCodePanelComponent;
  let fixture: ComponentFixture<SearchedZipCodePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedZipCodePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedZipCodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
