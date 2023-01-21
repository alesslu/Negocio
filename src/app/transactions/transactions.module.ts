import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsFilterComponent } from './transactions-filter/transactions-filter.component';
import { TransactionsItemComponent } from './transactions-item/transactions-item.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsMasterComponent } from './transactions-master/transactions-master.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransactionsFilterComponent,
    TransactionsItemComponent,
    TransactionsListComponent,
    TransactionsMasterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TransactionsMasterComponent
  ]
})
export class TransactionsModule { }
