import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { TransactionModel } from 'src/app/models/TransactionModel';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions-item',
  templateUrl: './transactions-item.component.html',
  styleUrls: ['./transactions-item.component.css']
})
export class TransactionsItemComponent implements OnInit{

  @Input() model: TransactionModel | null = null;

  constructor(){}

  ngOnInit(): void{
    
  }

}
