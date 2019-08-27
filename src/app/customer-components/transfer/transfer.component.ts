import { Component, OnInit } from '@angular/core';
import { BankService } from '../../shared_services/bank.service';
import { CustomerService } from 'src/app/shared_services/customer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  selected;
  accounts;
  from_account_number;
  customerData = JSON.parse(localStorage.getItem("currentUser"));
    constructor(private _bankService: BankService , private _customerService:  CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomerAccounts(this.customerData.customer_id)
    .subscribe(
      (customerAccounts) => {this.accounts = customerAccounts ; console.log(customerAccounts)},
      (error) => {console.log(error)}
      )
  }

  TransferMoney(formData){
    formData.from_account_number = this.from_account_number;
    this._customerService.customerMoneyTransfer( formData , this.customerData.customer_id)
    .subscribe(
       (res) => {console.log(res)},
       (error) => (console.log(error))
    )
    
  }

    selectFromAccount(from_account){
      this.from_account_number = from_account;
    }



}
