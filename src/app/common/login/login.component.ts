import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  AuthenticationService } from '../../shared_services/authentication.service';
import { User } from 'src/app/models/user.model';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // private user: User ={email:'' , password:''};
  private email:string= '';
  private password: string='';
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  processLoginForm(){
    console.log(this.email+" "+this.password);
    this.authenticationService.login(this.email , this.password)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            console.log("successgul");
          },
           error => {
             console.log("Login failed & error is "+error);
           }
        )
  }
}
