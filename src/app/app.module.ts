import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UitkModule } from '@uimf/uitk'; 
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
 
import { AppRoutingModule }     from './app-routing/app-routing.module';
 
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchComponent } from './search/search.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    UitkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }