import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from '../config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  // TODO: centralize headers at one place
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  getCustomerDetails(id){
    return this.http.get(config.BASE_URL+'/customer/find/'+id , {headers:this.headers})
      .pipe( map( customerDetails =>{
          return customerDetails;
      } , error =>{
        console.log(error);
      })
      )
  }

  getCustomerAccounts(customer_id){
    return this.http.get<Observable<any>>(config.BASE_URL+'/account/list/'+customer_id , {headers:this.headers})
      .pipe( map( customerAccounts =>{
          return customerAccounts;
      } , error =>{
        console.log(error);
      })
      )
  }

  getCustomerTransactions(id){

  }

  // @params account_type
  addAccountCustomerRequest(){

  }

  // @params account_no  
  // customer can enable or disable account 
  disableCustomerAccount(){

  }

  // @params from_account , to_account , amount  , 
  // online money transaction
  customerMoneyTransfer(){

  }

  // can update all details initially 
  customerUpdateDetails(){

  }


}
