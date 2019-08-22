import { Component, OnInit } from '@angular/core';
import { TRANSACTIONLIST } from '../transactions-mock';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {
  trans =TRANSACTIONLIST;
  displayedColumns: string[] = ['id', 'date','from','to','amount','type'];
  constructor() {
   }

  ngOnInit() {
    
  }

}
