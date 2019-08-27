import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  hide = true;//password visibility property
   userDetails = JSON.parse(localStorage.getItem('currentUser'));
   email:string ;
   userType = localStorage.getItem('userType');
  constructor() { }

  ngOnInit() {
    this.email = this.userDetails.email;
  }

  processForm(formData){
    console.log(formData);
  }

}
