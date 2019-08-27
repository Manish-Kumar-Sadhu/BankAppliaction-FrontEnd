import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { RegisterComponent } from './register/register.component';
import { TransferComponent } from './customer-components/transfer/transfer.component';
import { ContactComponent } from './common/contact/contact.component';

import { CustomerProfileComponent } from './customer-profile/customer-profile.component';


const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'transfer',component:TransferComponent},
  {path:'login' , component:LoginComponent},
  {path:'customerprofile',component:CustomerProfileComponent},
  {path:'register' , component:RegisterComponent},
  {path:'about' , component:AboutComponent},
  {path:'contacts',component:ContactComponent},
  {path:'**' ,  component:PagenotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
