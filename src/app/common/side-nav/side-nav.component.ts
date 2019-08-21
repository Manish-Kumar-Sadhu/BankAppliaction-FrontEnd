import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = false;
  comp: string ="Profile";
  isLoggedIn;
  userType = localStorage.getItem('userType');
  constructor() { }


  // TODO: choose best names for sidenav
  customer_items:string[] = [ 'Profile' , 'Accounts' ,  'TransactionSummary',  'Transfer',  
          'AddBankAccount' ,'ChangePassword' ,  `FAQ's` ];
  
  bank_items:string[] = ['Dashboard' , 'Profile' , 'Customer Accounts' ,  'CustomerRequests' ,'ChangePassword'];
  nav_items:string[] = (this.userType ==='customer' ? this.customer_items : this.bank_items);
  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  displayComponent(comp:string){
    this.comp = comp
  }

}
