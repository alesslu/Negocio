import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsMasterComponent } from './transactions-master.component';

describe('TransactionsMasterComponent', () => {
  let component: TransactionsMasterComponent;
  let fixture: ComponentFixture<TransactionsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
