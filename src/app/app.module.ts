import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './common/login/login.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './core/CustomMaterialModule ';
import { BankOpsComponent } from './bank-components/bank-ops/bank-ops.component';
import { ChangePasswordComponent } from './common/change-password/change-password.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { AccountsComponent } from './customer-components/accounts/accounts.component';
import { AboutComponent } from './common/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    BankOpsComponent,
    ChangePasswordComponent,
    SideNavComponent,
    AccountsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
