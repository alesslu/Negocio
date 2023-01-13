import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  listar(): CategoryModel[] {
    return [
      {
        id: 1,
        name: 'Rent',
        icon: 'fa-solid fa-building-columns',
        color: '#EF4444',
      },
      {
        id: 2,
        name: 'Groceries',
        icon: 'fa-solid fa-shopping-cart',
        color: '#06B6D4',
      },
      {
        id: 3,
        name: 'Transport',
        icon: 'fa-solid fa-car',
        color: '#F97316',
      },
      {
        id: 4,
        name: 'Health',
        icon: 'fa-solid fa-plus',
        color: '#F43F5E',
      },
      {
        id: 5,
        name: 'Gifts',
        icon: 'fa-solid fa-gift',
        color: '#8B5CF6',
      },
      {
        id: 6,
        name: 'Education',
        icon: 'fa-solid fa-book',
        color: '#0EA5E9',
      },
    ];
  }

  obtener(id?: number): CategoryModel {
    let categories = this.listar();
    return categories.filter((x: CategoryModel) => x.id == id)[0];
  }
}
