import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  // TODO: centralize headers at one place
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  getCustomerDetails(id){
    return this.http.get(environment.apiUrl+'/customer/find/'+id , {headers:this.headers})
      .pipe( map( customerDetails =>{
          return customerDetails;
      } , error =>{
        console.log(error);
      })
      )
  }

  getCustomerAccounts(customer_id){
    return this.http.get(environment.apiUrl+'/account/list/'+customer_id , {headers:this.headers})
      .pipe( map( customerAccounts =>{
          return customerAccounts;
      } , error =>{
        console.log(error);
      })
      )
  }

  createCustomer(customer): Observable<any>{
    return this.http.post<any>(environment.apiUrl+'/customer/save', JSON.stringify(customer) ,  {headers:this.headers})
      .pipe( map( customer =>{
        return customer;
      } , error => {
        console.log(error);
      })
      )
  }

  getCustomerTransactions(customer_id){
      return this.http.get(environment.apiUrl+'/transaction/list/'+customer_id , {headers:this.headers})
      .pipe( map( transactions =>{
          return transactions;
      } , error =>{
        console.log(error);
      })
      )
  }

  // @params account_type , customer_id
  addAccountCustomerRequest(customer_id  , account_type_id){
   return this.http.post(environment.apiUrl+`/account/save/${customer_id}/${account_type_id}` ,{headers:this.headers})
      .pipe( map( res =>{
        return res;
      } , error => {
        console.log(error);
      })
      )
  }

  // @params account_no  
  // customer can enable or disable account 
  disableCustomerAccount(){

  }


  activateCustomer(customer_id): Observable<any>{
  return this.http.put<any>(environment.apiUrl+'/customer/activate/'+customer_id ,  {headers:this.headers})
      .pipe( map( res =>{
        return res;
      } , error => {
        console.log(error);
      })
      )
  }


  // @params from_account , to_account , amount  , 
  // online money transaction
  customerMoneyTransfer(transactionData , customerId ){
    return this.http.post(environment.apiUrl+`/transaction/new/${customerId}`, JSON.stringify(transactionData) , {headers:this.headers})
      .pipe(  map( res =>{
          return res;
        } , error => {
          console.log(error);
        })
      )
  }

  // can update all details initially 
  customerUpdateDetails(customer): Observable<any>{
    return this.http.put<any>(environment.apiUrl+'/customer/update', JSON.stringify(customer) ,  {headers:this.headers})
      .pipe( map( customer =>{
        return customer;
      } , error => {
        console.log(error);
      })
      )
  }


}
