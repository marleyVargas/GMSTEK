import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAcceptComponent } from './transaction.accept.component';

describe('TransactionAcceptComponent', () => {
  let component: TransactionAcceptComponent;
  let fixture: ComponentFixture<TransactionAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
