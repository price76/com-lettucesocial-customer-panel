import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTypeComponent } from './logo-type.component';

describe('LogoTypeComponent', () => {
  let component: LogoTypeComponent;
  let fixture: ComponentFixture<LogoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
