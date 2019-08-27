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

  
  bankDetails;
  public accounts;
  allCustomers;
  customerData = JSON.parse(localStorage.getItem("currentUser"));
  customers;
  ngOnInit() {
    // console.log(this.customerData.customer_id);

    this._customerService.getCustomerAccounts(this.customerData.customer_id)
    .subscribe(
      (customerAccounts) => {this.accounts = customerAccounts ; console.log(customerAccounts)},
      (error) => {console.log(error)}
      )

    // this._customerService.getCustomerDetails(this.customerData.customer_id)
    // .subscribe(
    //   (customerDetails) => {console.log(customerDetails)},
    //   (error) => {console.log(error)}
    //   )
  
   
    // this._bankService.getBankDetails()
    // .subscribe(
    //   (bankDetails) => {this.bankDetails = bankDetails ; console.log(bankDetails)},
    //   (error)=>{console.log(error)}
    // )

    // this._bankService.getAllCustomers()
    // .subscribe(
    //   (allCustomers) =>{ this.allCustomers = allCustomers; console.log(allCustomers)},
    //   (error)=>{console.log(error)}
    // )

    // this._bankService.getAccountTypes()
    // .subscribe(
    //   (allCustomers) =>{  console.log(allCustomers)},
    //   (error)=>{console.log(error)}
    // )
    
    // this._bankService.getAllBankEmployees()
    // .subscribe(
    //   (allEmployees) =>{  console.log(allEmployees)},
    //   (error)=>{console.log(error)}
    // )
    
    // this._bankService.getAllAccounts()
    // .subscribe(
    //   (allAccounts) =>{  console.log(allAccounts)},
    //   (error)=>{console.log(error)}
    // )

    // this._bankService.getAllTransactions()
    // .subscribe(
    //   (allTransactions) =>{  console.log(allTransactions)},
    //   (error)=>{console.log(error)}
    // )
    
      
    


  }

}
