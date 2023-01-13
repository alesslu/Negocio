import { Component, OnInit } from '@angular/core';
import { FilterModel } from 'src/app/models/FilterModel';
import { TransactionModel } from 'src/app/models/TransactionModel';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  public transactions: TransactionModel[] = [];

  public showFilter: boolean = false;

  constructor(
    private transactionsService: TransactionsService
  ) {

  }

  ngOnInit(): void {
    this.listar();
  }

  public toggleShowFilter() {
    this.showFilter = !this.showFilter
    // !this.showFilter is igual que poner this.showFilter == false
    if (!this.showFilter) {
      this.listar(null);
    }
  }

  listar(filterModel: FilterModel | null = null) {
    this.transactions = this.transactionsService.listar(filterModel);
  }

  onClickLimpiarFiltro() {
    this.listar(null);
  }

}
