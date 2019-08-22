import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared_services/customer.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor( private _customerService: CustomerService) { }

  

  private accounts;
  private customerData = JSON.parse(localStorage.getItem("currentUser"));

  ngOnInit() {
    // console.log(this.customerData.customer_id);
    
    this._customerService.getCustomerAccounts(this.customerData.customer_id)
      .subscribe(
          (customerAccounts) => {this.accounts = customerAccounts},
          (error) => {console.log(error)}
      )
  }

}
