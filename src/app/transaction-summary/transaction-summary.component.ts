import { Component, OnInit } from '@angular/core';
import { TRANSACTIONLIST } from '../transactions-mock';
import { Transaction } from '../models/transaction.model';
import {  CustomerService } from '../shared_services/customer.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {
  
  public serialNo:number = 1;
  public length:number = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [1, 2 , 3 ,4 ,5, 10, 25, 100];

  trans =TRANSACTIONLIST;
  displayedColumns: string[] = [ 'serialNo' ,'TransactionId','from','to','amount','type'];
  public customerData = JSON.parse(localStorage.getItem("currentUser"));
  public customerTransactions;
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private _customerService : CustomerService) {
   }

  ngOnInit() {
    
    this._customerService.getCustomerTransactions(this.customerData.customer_id)
    .subscribe(
      (data) => {this.customerTransactions = data; console.log(data)},
      (error) => {console.log(error)}
    )
    //  this.length = this.customerTransactions.length;
    console.log(this.customerTransactions) 
  }

}
