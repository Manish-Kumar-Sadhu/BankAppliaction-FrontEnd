import { Component, OnInit } from '@angular/core';
import { CUSTOMERLIST } from 'src/app/customer-mock';
import { Customer } from 'src/app/customer';
import { PageEvent } from '@angular/material';
import { BankService } from '../../shared_services/bank.service'



@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {

  // public custs=CUSTOMERLIST;
  public selectedCustomer: Customer;
  public  customers;
  public length:number=10;
  public pageSize:number=0;
  public pageSizeOptions: number[] = [1, 2 , 3 ,4 ,5, 10, 25, 100];
  // public customerDetails:[] = this.customers
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private _bankService: BankService) { 
  }
  ngOnInit() {
    this.getCustomers();
  }
  onSelect(cust:Customer): void {
    this.selectedCustomer = cust;
  }
  
  // ngOnChanges(p: this.pageSize , l: this.length ): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   this._bankService.getAllCustomers(p, length)
  //   .subscribe(
  //     (res) => {this.customers = res; console.log(res)},
  //     (error) => {console.log(error)}
  //   )
  // }

  getCustomers(){
    this._bankService.getAllCustomers(this.pageSize , this.length)
    .subscribe(
      (res) => {this.customers = res; console.log(JSON.parse(JSON.stringify(res)));},
      (error) => {console.log(error)}
    )
  }
}
