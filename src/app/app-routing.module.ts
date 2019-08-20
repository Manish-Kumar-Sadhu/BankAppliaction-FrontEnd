import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
=======
import { TransferComponent } from './transfer/transfer.component';
>>>>>>> f82e20be57d0f6e62b80d8ae60b81b87d86d2e85


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'transfer',component:TransferComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'about' , component:AboutComponent},
  {path:'**' ,  component:PagenotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
