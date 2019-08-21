import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userType; 
  constructor(private _authenticationService:AuthenticationService) { }

  ngOnInit() {
    let urlParams = new URLSearchParams(location.search);
    let userType = urlParams.get('user-type');
    if(userType){
      this._authenticationService.userAuth(userType);
    }
    this.userType = localStorage.getItem('userType');
  }

}
