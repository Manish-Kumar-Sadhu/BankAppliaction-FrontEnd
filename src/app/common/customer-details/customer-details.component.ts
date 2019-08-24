import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  
  @Input() cust: Customer;
  constructor() { }

  ngOnInit() {
  }
  processRegisterForm(){
    console.log("done!");
  }
}

