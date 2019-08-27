import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared_services/customer.service';
import { BankService } from '../shared_services/bank.service';
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

// TODO: add alert services
  public userDetails = JSON.parse(localStorage.getItem('currentUser'));;
  userType = localStorage.getItem('userType');
  toggleEditSaveButton:boolean;
  enableEdit:boolean;
  constructor(private _customerService : CustomerService , private _bankService : BankService) { }

  ngOnInit() {
    this.enableEdit = false;
    this.toggleEditSaveButton = false;
    // console.log(this.userDetails);
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
  }

  enableEditing(){
    this.enableEdit = true;
    this.toggleEditSaveButton = true;
  }

  processUpdateForm(){
    console.log(this.userDetails);
    if(this.userType==="customer")
      this._customerService.customerUpdateDetails(this.userDetails)
      .subscribe(
        (res) => { console.log(res)},
        (error) => {console.log(error)}
      )
      if(this.userType==="bank"){
        this._bankService.updateBankEmployeeDetails(this.userDetails)
        .subscribe(
          (res) => { console.log(res)},
          (error) => {console.log(error)}
        )
      }
      
    this.enableEdit = false;
    this.toggleEditSaveButton = false;
  }
}
