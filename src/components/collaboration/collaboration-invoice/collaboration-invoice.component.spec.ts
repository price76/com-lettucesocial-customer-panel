import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationInvoiceComponent } from './collaboration-invoice.component';

describe('CollaborationInvoiceComponent', () => {
  let component: CollaborationInvoiceComponent;
  let fixture: ComponentFixture<CollaborationInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
