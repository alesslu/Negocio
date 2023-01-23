import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { TransactionModel } from '../models/TransactionModel';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  categoryId: number | null = null;
  categories: CategoryModel[] = [];
  montoTotalCategorias: number = 0;

  constructor(
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((data: CategoryModel[]) => {
      this.categories = this.categoriesService.sumar(data);
      this.categories.forEach((item: CategoryModel) => {     
        this.montoTotalCategorias += item.total!;
      })
    })
  }

  addNewCategory(category: any): void {
    this.categories.push(category);
    // this.categoriesService.createCategories(category)
  }
}


