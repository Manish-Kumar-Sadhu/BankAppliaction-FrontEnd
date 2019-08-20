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
  private headers = new HttpHeaders({'Content-Type':'text/plain'});

  login(email , password) {
    let body = new HttpParams();
    body.set('email' , email);
    body.set('password' , password)
    return this.http.post<any>(this.baseUrl+'/auth/login' , body )
    .pipe( map(user => {
        // localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(JSON.parse(user));
        return user;
      })

    )
  }

}
