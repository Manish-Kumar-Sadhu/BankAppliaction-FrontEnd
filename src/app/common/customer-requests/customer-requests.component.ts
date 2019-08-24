import { Component, OnInit } from '@angular/core';
import { CUSTOMERLIST } from 'src/app/customer-mock';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.css']
})
export class CustomerRequestsComponent implements OnInit {

  
  custs=CUSTOMERLIST;
  selectedCustomer: Customer;
  constructor() { }

  ngOnInit() {
  }
  onSelect(cust:Customer): void {
    this.selectedCustomer = cust;
  }
}
