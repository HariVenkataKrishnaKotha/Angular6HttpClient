import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  customers: Customer[];
 
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
  }

  getCustomerFname(firstname){
    console.log(firstname);
      return this.customerService.getCustomerFname(firstname)
      .subscribe(
        customers => {
          console.log(customers);
          this.customers = customers;
        }
      );
    
 }
}
