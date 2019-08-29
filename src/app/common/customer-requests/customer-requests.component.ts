import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Customer } from '../../models/customer.model';
import { BankService } from 'src/app/shared_services/bank.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CustomerService } from 'src/app/shared_services/customer.service';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.css']
})
export class CustomerRequestsComponent implements OnInit {

  
  // custs=CUSTOMERLIST;
  selectedCustomer: Customer;
  inactiveCustomers;
  dataSource;
  accountDataSource
  // @ViewChild('AccountPaginator' , {static: true} ) el:ElementRef;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort ,  {static: true}) sort: MatSort;
  @ViewChild('AccountPaginator', {static: true}) accountPaginator: MatPaginator;
  @ViewChild(MatSort ,  {static: true}) accountSort: MatSort;
  displayedAccountColumns: string[] = ['AccountNumber' ,'CreationDate' , 'Balance' , 'AccountType' , 'Status' , 'Action']
  displayedColumns: string[] = ['CustomerId','Name' , 'Status' , 'Action'];


  constructor(private _bankService: BankService , private _customerService : CustomerService) { 
  }
  

  ngOnInit() {

    this.getAllInaActiveCustomers();
    this.getAccountOpeningRequests();
  }
  
  onSelect(cust:Customer): void {
    this.selectedCustomer = cust;
  }

  activateCustomer(id){
    console.log(id);
    // alert(id);
    this._customerService.activateCustomer(id)
    .subscribe(
      (res) => {
        // this.inactiveCustomers =res;  
        // this.dataSource =  new MatTableDataSource(JSON.parse(JSON.stringify(res)));
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        console.log(res);
        this.ngOnInit();
      },
    (error) => {console.log(error)}
    )

  }

  activateAccount(account_no){
    this._bankService.activateAccountOpeningrequest(account_no)
    .subscribe(
      (res) =>{
        console.log(res);
        this.ngOnInit();
      },
      (error) => {console.log(error)}
    )
  }

  getAllInaActiveCustomers(){
    this._bankService.getAllInactiveCustomers()
    .subscribe(
      (res) => {
          this.inactiveCustomers =res;  
          this.dataSource =  new MatTableDataSource(JSON.parse(JSON.stringify(res)));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
          console.log(this.dataSource);
          
        },
      (error) => {console.log(error)}
    )
  }

  getAccountOpeningRequests(){
    this._bankService.getAccountOpeningRequests()
    .subscribe(
      (res) => {
        this.accountDataSource =  new MatTableDataSource(JSON.parse(JSON.stringify(res)));
        this.accountDataSource.paginator = this.accountPaginator;
        this.accountDataSource.sort = this.accountSort;
      },
      (error) => {console.log(error)}
    )
  }
}
