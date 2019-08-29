import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide_zero = require("src/assets/Iron_Bank_Of_Bravoos_1.png");
  
  public isLoggedIn = localStorage.getItem('isLoggedIn');
  public userType; 
  constructor( private _authenticationService:AuthenticationService) { }

  ngOnInit() {
    let urlParams = new URLSearchParams(location.search);
    let userType = urlParams.get('user-type');
    if(userType){
      this._authenticationService.userAuth(userType);
    }
    this.userType = localStorage.getItem('userType');
  }

}
