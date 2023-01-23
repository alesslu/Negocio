import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { FilterModel } from '../models/FilterModel';
import { TransactionModel } from '../models/TransactionModel';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  apiURI: string = "https://expensable-api.herokuapp.com//categories"

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService,
  ) { }

  getTransactionsById(id: string) {
    return this.http.get<TransactionModel[]>(`${this.apiURI}/${id}/transactions`)
  }

  filtrar(transactions: TransactionModel[], filterModel: FilterModel | null): TransactionModel[] {
    // agrupando
    transactions = this.groupTransactions(transactions);

    // filtrando
    if (filterModel != null) {
      // categorias
      if (filterModel.categories!.length > 0) {
        let categoryIds: number[] = [];
        filterModel.categories?.forEach((item: CategoryModel) => {
          categoryIds.push(item.id!);
        });
        transactions.forEach((resumen: TransactionModel) => {
          if (resumen.transactions!.length > 0) {
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => categoryIds.includes(x.category_id!));
          }
        })
      }
      // montos
      transactions.forEach((resumen: TransactionModel) => {
        if (resumen.transactions!.length > 0) {
          if (filterModel.min) {
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => x.amount! >= filterModel.min!);
          }
          if (filterModel.max) {
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => x.amount! <= filterModel.max!);
          }
        }
      })

      // fechas
      transactions.forEach((resumen: TransactionModel) => {
        if (resumen.transactions!.length > 0) {
          if (filterModel.from) {
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => new Date(x.date!).getTime() >= new Date(filterModel.from! + 'T00:00:00').getTime());
          }
          if (filterModel.to) {
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => new Date(x.date!).getTime() <= new Date(filterModel.to! + 'T24:00:00').getTime());
          }
        }
      })
    }

    // sumando
    transactions.forEach((resumen: TransactionModel) => {
      let total = 0;
      if (resumen.transactions!.length > 0) {
        resumen.transactions?.forEach((transaction: TransactionModel) => {
          if(transaction.transaction_type == 'income') {
            total += transaction.amount!;
          }else {
            total -= transaction.amount!;
          }
        });
      }
      resumen.amount = total;
    })

    transactions = transactions.sort((a: TransactionModel, b: TransactionModel) => b.date!.getTime() - a.date!.getTime())

    return transactions;
  }

  groupTransactions(data: any[]): TransactionModel[] {

    const groups = data.reduce((groups, transaction) => {
      let date = transaction.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transaction);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date: string) => {
      return {
        type: 'RESUMEN',
        date: new Date(date),
        amount: 0,
        transactions: groups[date]
      };
    });

    return groupArrays;
  }
}
