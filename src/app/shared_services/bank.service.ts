import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  //(CUSTOMER | BANK ADMIN | BANK EMPLOYEE ) Details to display in app
  getBankDetails(){
    return this.http.get(environment.apiUrl+'/bank/details' , {headers:this.headers})
      .pipe( map( bankDetails =>{
          return JSON.parse(JSON.stringify(bankDetails));
      } , error =>{
        console.log(error);
      })
      )
  }

  //(CUSTOMER | BANK ADMIN | BANK EMPLOYEE ) Details to display in app
  getAccountTypes(){
    return this.http.get(environment.apiUrl+'/accounttype/list' , {headers:this.headers})
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
    return this.http.post(environment.apiUrl+'bankEmployee/save' , JSON.stringify(bankEmployee)  , {headers:this.headers})
        .pipe( map(
          (response: Response)=> response,
          error =>{
            console.log(error);
          }
        ))
  }

  // (BANK ADMIN | BANK EMPLOYEE) update his/her account details
  //  @params bankEmployee Object
  updateBankEmployeeDetails(bankEmployee){
    return this.http.put(environment.apiUrl+'/bankemployee/update' , JSON.stringify(bankEmployee)  , {headers:this.headers})
        .pipe( map(
          (response: Response)=> response,
          error =>{
            console.log(error);
          }
        ))
  }

  // (BANK ADMIN) List of all bank employees 
  getAllBankEmployees(){
    return this.http.get(environment.apiUrl+'/bankemployee/list' , {headers:this.headers})
      .pipe( map(bankEmployeesList =>{
          return bankEmployeesList;
      } , error =>{
        console.log(error);
      }
      ))
  }

  // (BANK ADMIN | BANK EMPLOYEE) List of all accounts
  getAllAccounts(){
    return this.http.get(environment.apiUrl+'/account/list' , {headers:this.headers})
      .pipe( map(allBankAccounts =>{
          return allBankAccounts;
      } , error =>{
        console.log(error);
      }
      ))
  }

    // (BANK ADMIN | BANK EMPLOYEE) List of all customers
    getAllCustomers(){
      console.log('all customers api');
      return this.http.get(environment.apiUrl+'/customer/list' , {headers:this.headers})
      .pipe( map(customers =>{
          return customers;
      } , error =>{
        console.log(error);
      }))
    }
    
    
    getAllInactiveCustomers(){
      console.log('all inactive customers api');
      return this.http.get(environment.apiUrl+'/customer/inactivecustomerlist' , {headers:this.headers})
      .pipe( map(inactiveCustomers =>{
          return inactiveCustomers;
      } , error =>{
        console.log(error);
      }))
    }


   
    // getAllCustomers(page_no , size){
    //   console.log('all customers api');
    //   typeof(page_no);
    //   typeof(size);
    //   return this.http.get(environment.apiUrl+'/customer/list/'+page_no+'/'+size , {headers:this.headers})
    //   .pipe( map(customers =>{
    //       return customers;
    //   } , error =>{
    //     console.log(error);
    //   }))
    // }

  // (BANK ADMIN | BANK EMPLOYEE) List of all 
  getAllTransactions(){
    return this.http.get(environment.apiUrl+'/transaction/list' , {headers:this.headers})
      .pipe( map(allBankTransactions =>{
          return allBankTransactions;
      } , error =>{
        console.log(error);
      }
      ))
  }
  
  getAllFlaggedTransactions(){
    return this.http.get(environment.apiUrl+'/transaction/flagedtransaction' , {headers:this.headers})
      .pipe( map(allFlaggedTransactions =>{
          return allFlaggedTransactions;
      } , error =>{
        console.log(error);
      }
      ))
  }

  // (BANK EMPLOYEE) list of all account opening requests
  getAccountOpeningRequests(){
    return this.http.get(environment.apiUrl+'/account/inactiveaccountlist' , {headers:this.headers})
      .pipe( map(allInActiveAccounts =>{
          return allInActiveAccounts;
      } , error =>{
        console.log(error);
      }
      ))
  }

  // (BANK EMPLOYEE) activating the account requested by user
  activateAccountOpeningrequest(account_no){
    return this.http.put<any>(environment.apiUrl+'/account/activate/'+account_no ,  {headers:this.headers})
    .pipe( map( res =>{
      return res;
    } , error => {
      console.log(error);
    })
    )
  }


}
