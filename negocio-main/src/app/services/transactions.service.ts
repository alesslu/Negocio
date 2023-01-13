import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { FilterModel } from '../models/FilterModel';
import { TransactionModel } from '../models/TransactionModel';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private categoriesService: CategoriesService,
  ) { }

  listar(filterModel: FilterModel | null): TransactionModel[] {
    let transactions: TransactionModel[] = [
      { id: 1, category_id: 1, description: 'Description', amount: 120, date: new Date('2023-01-14') },
      { id: 2, category_id: 2, description: 'Description', amount: -520, date: new Date('2023-01-14') },
      { id: 3, category_id: 3, description: 'Description', amount: 5330, date: new Date('2023-01-14') },
      { id: 4, category_id: 2, description: 'Description', amount: -100, date: new Date('2023-01-12') },
      { id: 5, category_id: 3, description: 'Description', amount: 200, date: new Date('2023-01-13') },
      { id: 6, category_id: 4, description: 'Description', amount: -100, date: new Date('2023-01-13') },
      { id: 7, category_id: 4, description: 'Description', amount: -100, date: new Date('2023-01-15') },
      { id: 8, category_id: 5, description: 'Description', amount: 100, date: new Date('2023-01-10') },
      { id: 9, category_id: 5, description: 'Description', amount: -100, date: new Date('2023-01-10') },
      { id: 10, category_id: 6, description: 'Description', amount: 10, date: new Date('2023-01-10') },
      { id: 11, category_id: 6, description: 'Description', amount: -10, date: new Date('2023-01-10') },
      { id: 12, category_id: 6, description: 'Description', amount: -10, date: new Date('2023-01-07') },
      { id: 13, category_id: 2, description: 'Description', amount: 100, date: new Date('2023-01-07') },
      { id: 14, category_id: 2, description: 'Description', amount: -100, date: new Date('2023-01-07') },
      { id: 15, category_id: 3, description: 'Description', amount: -2000, date: new Date('2023-01-08') },
      { id: 16, category_id: 2, description: 'Description', amount: 200, date: new Date('2023-01-09') },
      { id: 17, category_id: 1, description: 'Description', amount: -100, date: new Date('2023-01-11') },
      { id: 18, category_id: 2, description: 'Description', amount: 100, date: new Date('2023-01-12') },
      { id: 19, category_id: 3, description: 'Description', amount: -200, date: new Date('2023-01-11') },
      { id: 20, category_id: 5, description: 'Description', amount: -20, date: new Date('2023-01-15') },
    ];

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
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => x.date!.getTime() >= new Date(filterModel.from! + 'T00:00:00').getTime());
          }
          if (filterModel.to) {
            resumen.transactions = resumen.transactions!.filter((x: TransactionModel) => x.date!.getTime() <= new Date(filterModel.to! + 'T00:00:00').getTime());
          }
        }
      })
    }

    // sumando
    transactions.forEach((resumen: TransactionModel) => {
      let total = 0;
      if (resumen.transactions!.length > 0) {
        resumen.transactions?.forEach((transaction: TransactionModel) => {
          total += transaction.amount!;
        });
      }
      resumen.amount = total;
    })

    // asignando categoría
    transactions.forEach((resumen: TransactionModel) => {
      if (resumen.transactions!.length > 0) {
        resumen.transactions!.forEach((transaction: TransactionModel) => {
          transaction.category = this.categoriesService.obtener(transaction.category_id);
        });
      }
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
