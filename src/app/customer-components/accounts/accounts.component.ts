import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  public accountLists= [
    {
      "owner":"Manish Sadhu",
      "account_number":6667778889,
      "created_date":'12/12/12',
      "account_type":'savings',
      "balance":25000,
      "registered_mobile":9133550113
    },
    {
      "owner":"Manish Sadhu",
      "account_number":9998887776,
      "created_date":'20/09/1998',
      "account_type":'Current',
      "balance":5000,
      "registered_mobile":8885910066
    }
  ]

  ngOnInit() {
  }

}
