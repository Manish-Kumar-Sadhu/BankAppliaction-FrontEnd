import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

// TODO: add alert services
  userDetails = JSON.parse(localStorage.getItem('currentUser'));
  userType = localStorage.getItem('userType');
  toggleEditSaveButton:boolean;
  enableEdit:boolean;
  constructor() { }

  ngOnInit() {
    this.enableEdit = false;
    this.toggleEditSaveButton = false;
  }

  enableEditing(){
    this.enableEdit = true;
    this.toggleEditSaveButton = true;
  }

  processRegisterForm(){
    console.log("egwa");
    this.enableEdit = false;
    this.toggleEditSaveButton = false;
  }
}
