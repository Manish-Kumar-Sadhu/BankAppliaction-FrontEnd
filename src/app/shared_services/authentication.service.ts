import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from '../config';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { 
  }

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  // to distinguish the customer and bank user 
  // @params : intial home url
  userAuth(userType){
    console.log(userType)
    if(!localStorage.getItem('userType')){
      localStorage.setItem('userType' , userType)
    } else {
      localStorage.removeItem('userType');
      localStorage.setItem('userType' , userType)
    }
  }


  // accessing login api
  // @params  email ,password ; binding params :usertype

  login(email , password) {
    let userType = localStorage.getItem('userType');
    return this.http.post<any>(config.BASE_URL+'/auth/login' , JSON.stringify({'email':email , 'password':password , 'type':userType}) , {headers:this.headers} )
    .pipe( map(user => {
        return user;
      })
    )
  }


  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn')
    // this.currentUserSubject.next(null);
}


  // (BANK ADMIN | BANK EMPLOYEE | CUSTOMER )
  // @params id and user_type
  changePassword(customer_id , user_type ,  password){
    this.http.post(config.BASE_URL+'/auth/updatepassword' , JSON.stringify({'customer_id' : customer_id , 'user_type':user_type , 'password':password}) , {headers:this.headers} )
    .pipe( map(res => {
      return res;
    })
  )
  }


}
