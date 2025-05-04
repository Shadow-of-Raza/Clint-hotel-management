import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Entity/customer';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer;
  customerId: number;
  name : string ="Ansar";
  //{{name }}

  constructor(
    private router: Router,
    private dataService: DataService,

  ) {}

  ngOnInit(): void {
    
    this.customerId = Number(sessionStorage.getItem('customerid'));
    console.log('customer id in customer list component: ', this.customerId);
    
    if (this.customerId) {
      // Fetch the customer details using the service
      this.dataService.getCustomerById(this.customerId).subscribe(
        (customer: Customer) => {
          if (customer) {
            this.customer = customer;
          } else {
            console.error('customer data not found.');
          }
        },
        (error: any) => {
          console.error('Error fetching customer profile:', error);
        }
      );
    } else {
      console.error('customer ID parameter not provided in the route.');
    }
  }
  updateCustomerProfile(customerid:number){
    
    this.router.navigate(['/customerprofileupdate', customerid]);
    
  }
}

