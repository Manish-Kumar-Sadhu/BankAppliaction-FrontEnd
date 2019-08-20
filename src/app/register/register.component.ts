import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  processRegisterForm(){
    console.log("done!");
  }

  

}
