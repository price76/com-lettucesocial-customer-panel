import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCreatorInvoiceComponent } from './find-creator-invoice.component';

describe('FindCreatorInvoiceComponent', () => {
  let component: FindCreatorInvoiceComponent;
  let fixture: ComponentFixture<FindCreatorInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCreatorInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCreatorInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
