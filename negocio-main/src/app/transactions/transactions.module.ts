import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsFilterComponent } from './transactions-filter/transactions-filter.component';
import { TransactionsItemComponent } from './transactions-item/transactions-item.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsMasterComponent } from './transactions-master/transactions-master.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule
  ],
  exports: [
    TransactionsMasterComponent
  ]
})
export class TransactionsModule { }
