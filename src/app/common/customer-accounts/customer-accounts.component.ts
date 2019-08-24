import { Component, OnInit } from '@angular/core';
import { CUSTOMERLIST } from 'src/app/customer-mock';
import { Customer } from 'src/app/customer';
import { PageEvent } from '@angular/material';




@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {

  public custs=CUSTOMERLIST;
  public selectedCustomer: Customer;
  constructor() { 
   
  }
  ngOnInit() {
  }
  onSelect(cust:Customer): void {
    this.selectedCustomer = cust;
  }
}
