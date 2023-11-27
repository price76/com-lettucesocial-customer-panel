import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRibonComponent } from './navigation-ribon.component';

describe('NavigationRibonComponent', () => {
  let component: NavigationRibonComponent;
  let fixture: ComponentFixture<NavigationRibonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationRibonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationRibonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
