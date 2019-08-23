import { Component, OnInit } from '@angular/core';
import { BankService } from '../shared_services/bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  selectedAccount = '';
  public accountTypes=[];
  constructor(private _bankService: BankService) { }

  ngOnInit() {
    // this._bankService.getAccountTypes().subscribe((accountTypes)=>{
    //   // this.accountTypes = JSON.parse(JSON.stringify(accountTypes));
    //   console.log(this.accountTypes)
    // });
  
  }
  onSubmit(formData){
    console.log("Transfer Done!")
    console.log(formData);
    }


}
