import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationReceiptComponent } from './collaboration-receipt.component';

describe('CollaborationReceiptComponent', () => {
  let component: CollaborationReceiptComponent;
  let fixture: ComponentFixture<CollaborationReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
