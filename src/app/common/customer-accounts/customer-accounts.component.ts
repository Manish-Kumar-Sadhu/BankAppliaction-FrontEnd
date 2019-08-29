import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../models/customer.model';

import { MatPaginator,  MatTableDataSource, MatSort } from '@angular/material';
import { BankService } from '../../shared_services/bank.service'



@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {


  public selectedCustomer: Customer;
  customers;
  displayedColumns: string[] = ['CustomerId','Name' , 'Status'];
  dataSource;
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort ,  {static: true}) sort: MatSort;

  constructor(private _bankService: BankService) { 
  }
  ngOnInit() {
    
    this._bankService.getAllCustomers()
    .subscribe(
      (res) => {
          this.customers =res;  
          this.dataSource =  new MatTableDataSource(JSON.parse(JSON.stringify(res)));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res);
          
        },
      (error) => {console.log(error)}
    )
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // console.log(this.dataSource);
  }

  onSelect(cust:Customer): void {
    console.log(cust);
    this.selectedCustomer = cust;
  }

  
}
