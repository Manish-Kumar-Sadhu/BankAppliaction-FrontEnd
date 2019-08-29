import { Component, OnInit, ViewChild } from '@angular/core';
import { TRANSACTIONLIST } from '../../transactions-mock';
import { Transaction } from '../../models/transaction.model';
import {  CustomerService } from '../../shared_services/customer.service';
import {  BankService } from '../../shared_services/bank.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {


  userType = localStorage.getItem('userType');
  trans =TRANSACTIONLIST;
  displayedColumns: string[] = ['TransactionId', 'Date' , 'from','to','amount','type'];
  public customerData = JSON.parse(localStorage.getItem("currentUser"));
  
  public customerTransactions;
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort ,  {static: true}) sort: MatSort;
  

  constructor(private _customerService : CustomerService , private _bankService : BankService) {
   }

  ngOnInit() {
    
    if(this.userType === 'customer'){

      this._customerService.getCustomerTransactions(this.customerData.customer_id)
      .subscribe(
        (data) => {
          this.customerTransactions = data;
          this.dataSource =  new MatTableDataSource(JSON.parse(JSON.stringify(data)));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(data)},
        (error) => {console.log(error)}
        )
    }
    if(this.userType === 'bank'){
      this._bankService.getAllTransactions()
      .subscribe(
        (data) => {
          this.customerTransactions = data;
          this.dataSource =  new MatTableDataSource(JSON.parse(JSON.stringify(data)));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(data)},
        (error) => {console.log(error)}
        )   
      }
    
    }



  }

