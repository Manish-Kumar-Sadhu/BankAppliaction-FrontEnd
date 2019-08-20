import { Injectable } from '@angular/core';
import { HttpRequest , HttpResponse , HttpClient, HttpHandler , HttpEvent  , HttpInterceptor, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
  private baseUrl:String = 'http://localhost:8080';
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  login(email , password) {
    
    return this.http.post<any>(this.baseUrl+'/auth/login' , JSON.stringify({'email':email , 'password':password , 'type':'customer'}) , {headers:this.headers} )
    .pipe( map(user => {
        localStorage.setItem('isLoggedIn' , 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      })
    )
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
}

}
