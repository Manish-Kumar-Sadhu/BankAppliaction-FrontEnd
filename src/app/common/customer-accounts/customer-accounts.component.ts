import { Component, OnInit, ViewChild } from '@angular/core';
import { CUSTOMERLIST } from 'src/app/customer-mock';
import { Customer } from 'src/app/customer';
import { PageEvent, MatPaginator, MatPaginatorModule, MatTableDataSource } from '@angular/material';
import { BankService } from '../../shared_services/bank.service'



@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {


  @ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;    
  

  // public custs=CUSTOMERLIST;
  public selectedCustomer: Customer;
  public  customers;
  public length:number=10;
  public pageSize:number=0;
  public pageSizeOptions: number[] = [1, 2 ,5, 10, 25, 100];
  public pages:Array<number>;
  displayedColumns: string[] = [ 'serialNo' ,'CustomerId','Name'];
  dataSource = new MatTableDataSource(this.customers);

   pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  handlePage(event: PageEvent){
    
    this.getCustomers(event.pageIndex , event.length); 
  }

  constructor(private _bankService: BankService) { 
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getCustomers(this.pageSize , this.length);
  }
  onSelect(cust:Customer): void {
    this.selectedCustomer = cust;
  }

  
  
  getCustomers(pageSize , length){
    this._bankService.getAllCustomers(pageSize , length)
    .subscribe(
      (res) => {
          this.customers = res['content'];  
          this.length =res['totalPages'];
          console.log(res['content'])},
      (error) => {console.log(error)}
    )
  }
}
