import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn;
  public currentUser;
  private LOGO = require("../../../assets/inguz.png");
  constructor(private router: Router, private _authenticationService: AuthenticationService) { 
    // this._authenticationService.cu
  }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  logout(){
    this._authenticationService.logout()
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['/login'])
  }

}
