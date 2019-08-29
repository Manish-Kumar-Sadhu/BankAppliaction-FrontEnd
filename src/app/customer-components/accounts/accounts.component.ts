import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared_services/customer.service';
import { BankService } from 'src/app/shared_services/bank.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor( private _customerService: CustomerService , private _bankService: BankService) { }

  show= false;
  selected
  bankDetails;
  public accounts;
  allCustomers;
  customerData = JSON.parse(localStorage.getItem("currentUser"));
  customer_id = this.customerData.customer_id;
  customers;
  accountTypes;
  selectedAccountTypeId;
  ngOnInit() {
    // console.log(this.customerData.customer_id);

    this._customerService.getCustomerAccounts(this.customerData.customer_id)
    .subscribe(
      (customerAccounts) => {this.accounts = customerAccounts ; console.log(customerAccounts)},
      (error) => {console.log(error)}
      )
    
    
    this._bankService.getAccountTypes()
    .subscribe(
      (accountTypes) => {this.accountTypes = accountTypes ; console.log(accountTypes)},
      (error) => {console.log(error)}
      )

  }

  OpenForm(){
    this.show = true;
  }

  closeForm(){
    this.show = false;
  }

  selectAccountType(account_type_id){
    // console.log(account_type_id);
    this.selectedAccountTypeId = account_type_id;
  }
  processAccountOpeningForm(){
    
    this._customerService.addAccountCustomerRequest(this.customer_id , this.selectedAccountTypeId)
    .subscribe(
      (res) => { 
        console.log(res) ; 
        console.log("Account Requested SuccessFully");
        this.closeForm();  
      },
      (error) => { console.log(error)}
    )
  }

}
