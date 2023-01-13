import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { FilterModel } from 'src/app/models/FilterModel';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.css']
})
export class TransactionsFilterComponent implements OnInit {

  public filterModel: FilterModel = {
    categories: [],
    min: null,
    max: null,
    from: null,
    to: null,
  };

  public categories: CategoryModel[] = [];

  public categoriesSelected: CategoryModel[] = [];

  @Output() filter: EventEmitter<FilterModel> = new EventEmitter();

  constructor(
    private categoriesService: CategoriesService,
  ) {

  }

  ngOnInit(): void {
    this.categories = this.categoriesService.listar();
    this.filterModel = {
      categories: [],
      min: null,
      max: null,
      from: null,
      to: null,
    };
  }

  changeCategorySelection() {
    this.fetchSelectedItems()
    this.onFilter();
  }

  fetchSelectedItems() {
    this.categoriesSelected = this.categories.filter((category: CategoryModel) => {
      return category.isChecked
    });
  }

  onFilter() {
    this.filterModel.categories = this.categoriesSelected;
    this.filter.emit(this.filterModel);
  }
}
