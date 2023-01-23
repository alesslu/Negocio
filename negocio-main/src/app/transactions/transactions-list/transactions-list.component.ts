import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { FilterModel } from 'src/app/models/FilterModel';
import { TransactionModel } from 'src/app/models/TransactionModel';
import { CategoriesService } from 'src/app/services/categories.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: TransactionModel[] = [];
  transactionsCompleto: TransactionModel[] = [];
  categories: CategoryModel[] = [];

  public showFilter: boolean = false;

  constructor(
    private transactionsService: TransactionsService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((res: CategoryModel[]) => {
      this.categories = res;
      this.categories.forEach((cat: CategoryModel) => {
        cat.transactions?.forEach((trns: TransactionModel) => {
          cat.transactions = [];
          trns.category = cat;
          trns.category_id = cat.id;
          trns.transaction_type = cat.transaction_type;
          this.transactionsCompleto.push(trns);
        })
      })
      this.listar();
    });
  }

  public toggleShowFilter() {
    this.showFilter = !this.showFilter
    // !this.showFilter is igual que poner this.showFilter == false
    if (!this.showFilter) {
      this.listar(null);
    }
  }

  listar(filterModel: FilterModel | null = null) {
    this.transactions = this.transactionsService.filtrar(this.transactionsCompleto, filterModel);
  }

  onClickLimpiarFiltro() {
    this.listar(null);
  }

}
