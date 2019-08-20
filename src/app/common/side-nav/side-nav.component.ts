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
  constructor() { }

  // TODO: choose best names for sidenav
   nav_items:string[] = ['Profile' , 'Accounts' , 'ChangePassword' , 'Transfer' , 'Transaction Summary' , 
          'Add Employee' , 'Customer Requests',    'Transaction Overflows',`FAQ's`
    ];

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  displayComponent(comp:string){
    this.comp = comp
  }

}
