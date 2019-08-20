import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = false;
  comp: string;
  constructor() { }

  // TODO: choose best names for sidenav
   nav_items:string[] = ['Profile' , 'Accounts' , 'Change Password' , 'Transaction' , 'Transaction Summary' , 
          'Add Employee' , 'Customer Requests',    'Transaction Overflows',`FAQ's`
    ];

  ngOnInit() {
  }

  displayComponent(comp:string){
    this.comp = comp
  }

}
