import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionshomeComponent } from './transactionshome.component';

describe('TransactionshomeComponent', () => {
  let component: TransactionshomeComponent;
  let fixture: ComponentFixture<TransactionshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
