import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { config } from '../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  //(CUSTOMER | BANK ADMIN | BANK EMPLOYEE ) Details to display in app
  getBankDetails(){
    return this.http.get(config.BASE_URL+'/bank/details' , {headers:this.headers})
      .pipe( map( bankDetails =>{
          return bankDetails;
      } , error =>{
        console.log(error);
      })
      )
  }

  //(CUSTOMER | BANK ADMIN | BANK EMPLOYEE ) Details to display in app
  getAccountTypes(){
    return this.http.get(config.BASE_URL+'/accountType/list' , {headers:this.headers})
      .pipe( map(accountType =>{
          return accountType;
      } , error =>{
        console.log(error);
      }
      ))
  }

  // (BANK ADMIN) Bank admin can create a bank employee
  // @params bankEmployee Object
  addBankEmployee(bankEmployee){
    return this.http.post(config.BASE_URL+'bankEmployee/save' , JSON.stringify(bankEmployee)  , {headers:this.headers})
        .pipe( map(
          (response: Response)=> response,
          error =>{
            console.log(error);
          }
        ))
  }

  // (BANK ADMIN | BANK EMPLOYEE) update account details
  //  @params bankEmployee Object
  updateBankEmployeeDetails(bankEmployee){
    return this.http.put(config.BASE_URL+'bankEmployee/save' , JSON.stringify(bankEmployee)  , {headers:this.headers})
        .pipe( map(
          (response: Response)=> response,
          error =>{
            console.log(error);
          }
        ))
  }

  // (BANK ADMIN) List of all bank employees 
  getAllBankEmployees(){
    return this.http.get(config.BASE_URL+'/bankEmployee/list' , {headers:this.headers})
      .pipe( map(bankEmployeesList =>{
          return bankEmployeesList;
      } , error =>{
        console.log(error);
      }
      ))
  }

  // (BANK ADMIN | BANK EMPLOYEE) List of all accounts
  getAllAccounts(){
    return this.http.get(config.BASE_URL+'/account/list' , {headers:this.headers})
      .pipe( map(allBankAccounts =>{
          return allBankAccounts;
      } , error =>{
        console.log(error);
      }
      ))
  }

    // (BANK ADMIN | BANK EMPLOYEE) List of all customers
    getAllCustomers(){
      return this.http.get(config.BASE_URL+'/customer/list' , {headers:this.headers})
        .pipe( map(allBankAccounts =>{
            return allBankAccounts;
        } , error =>{
          console.log(error);
        }
        ))
    }

  // (BANK ADMIN | BANK EMPLOYEE) List of all 
  getAllTransactions(){
    return this.http.get(config.BASE_URL+'/transactions/list' , {headers:this.headers})
      .pipe( map(allBankTransactions =>{
          return allBankTransactions;
      } , error =>{
        console.log(error);
      }
      ))
  }

  // (BANK EMPLOYEE) list of all account opening requests
  getAccountOpeningRequests(){

  }

  // (BANK EMPLOYEE) account number
  activateAccountOpeningrequest(){
    
  }

  // (BANK ADMIN | BANK EMPLOYEE | CUSTOMER )
  // @params id and user_type
  changePassword(){

  }

}
