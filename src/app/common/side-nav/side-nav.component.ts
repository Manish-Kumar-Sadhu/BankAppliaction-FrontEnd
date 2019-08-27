import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = false;
  comp: string; 
  isLoggedIn;
  userType = localStorage.getItem('userType');
  constructor() { }

     customer_items = [
        {'title':'Profile' , 'icon':'person'},
        {'title':'Accounts' , 'icon':'account_balance'},
        {'title':'TransactionSummary' , 'icon':'compare_arrows'},
        {'title':'Transfer' , 'icon':'arrow_right_alt'},
        {'title':'ChangePassword' , 'icon':'edit'},
        {'title':'FAQs' , 'icon':'help_outline'},
      ]
    bank_items = [
      {'title':'Dashboard' , 'icon':'dashboard'},
      {'title':'Profile' , 'icon':'person'},
      {'title':'Customer Accounts' , 'icon':'account_tree'},
      {'title':'Customer Requests' , 'icon':'notification_important'},
      {'title':'All Transactions' , 'icon':'swap_horiz'},
      {'title':'ChangePassword' , 'icon':'edit'}
    ]
  // TODO: choose best names for sidenav
   nav_items = (this.userType ==='customer' ? this.customer_items : this.bank_items);
  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.comp =  this.userType === 'customer' ? 'Profile' : 'Dashboard';
  }

  displayComponent(comp:string){
    this.comp = comp
  }

}
