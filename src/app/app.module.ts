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
import { ChangePasswordComponent } from './common/change-password/change-password.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { AccountsComponent } from './customer-components/accounts/accounts.component';
import { AboutComponent } from './common/about/about.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { RegisterComponent } from './register/register.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { MainpageComponent } from './models/mainpage/mainpage.component';
import { ContactComponent } from './common/contact/contact.component';
import { TransferComponent } from './customer-components/transfer/transfer.component';
import { DashboardComponent } from './bank-components/dashboard/dashboard.component';
import { CustomerAccountsComponent } from './common/customer-accounts/customer-accounts.component';
import { CustomerDetailsComponent } from './common/customer-details/customer-details.component';
import { CustomerRequestsComponent } from './common/customer-requests/customer-requests.component';
import { FaqsComponent } from './customer-components/faqs/faqs.component';
import { AlertComponent } from './common/alert/alert.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    ChangePasswordComponent,
    SideNavComponent,
    AccountsComponent,
    AboutComponent,
    RegisterComponent,
    CustomerProfileComponent,
    TransferComponent,
    TransactionSummaryComponent,
    MainpageComponent,
    ContactComponent,
    DashboardComponent,
    CustomerAccountsComponent,
    CustomerDetailsComponent,
    CustomerRequestsComponent,
    FaqsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
