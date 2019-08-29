import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared_services/authentication.service';
import { CustomerService } from '../shared_services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private router: Router , private  _customerService: CustomerService) { }

  ngOnInit() {
  }

  processRegisterForm(formData){
     console.log(formData);
    this._customerService.createCustomer(formData).pipe().subscribe(
      data => {
        this.router.navigate['/login'];
        console.log("customer created successfully ");
      } , 
      error =>{
        console.log(error.message);
      }
    )  
  }
}
