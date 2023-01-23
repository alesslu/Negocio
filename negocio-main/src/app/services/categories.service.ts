import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { HttpClient } from '@angular/common/http';
import { TransactionModel } from '../models/TransactionModel';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiURI: string = "https://expensable-api.herokuapp.com//categories"

  addCategories: { name: string, icon: string, type_transaction: string, color: string, transactions: [] } = { name: "", icon: "", type_transaction: "", color: "", transactions: [] }


  constructor(
    private http: HttpClient
  ) { }

  categories: CategoryModel[] = []
  montoTotalCategorias: number = 0;

  getAllCategories() {
    return this.http.get<CategoryModel[]>(this.apiURI)
  }

  getCategoriesById(id: string) {
    return this.http.get<CategoryModel>(`${this.apiURI}/${id}`)
  }

  createCategories(categories: any = [] ){
    this.http.post(this.apiURI, categories)
    .subscribe((res)=>{
      console.log(res);
    })
  }

  sumar(categories: CategoryModel[]): CategoryModel[] {
    categories.forEach((cat: CategoryModel) => {
      let total = 0;
      cat.transactions!.forEach((tr: TransactionModel) => {
        total += tr.amount!;
      });
      cat.total = total;
    })
    return categories;
  }

}
