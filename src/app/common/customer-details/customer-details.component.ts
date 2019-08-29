import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../shared_services/customer.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  
  @Input() cust: Customer;

  customerDetails = this.cust;
  constructor(private _customerService: CustomerService) {
    
   }

  ngOnInit() {
    console.log("customer detail comp");
    console.log(this.cust)
  }

  getCustomerAccounts(){
    // this._customerService.getCustomerAccounts(this.cust.customer_id)
    // .subscribe(
    //   (res) =>{ this.customerAccounts  = res; console.log(res)},
    //   (error) => {console.log(error)}
    // )
  }
  processRegisterForm(){
    console.log("done!");
  }
}

