import { Component, Input } from '@angular/core';
import { TransactionModel } from 'src/app/models/TransactionModel';

@Component({
  selector: 'app-transactions-item',
  templateUrl: './transactions-item.component.html',
  styleUrls: ['./transactions-item.component.css']
})
export class TransactionsItemComponent {

  @Input() model: TransactionModel | null = null;

}
