import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Entity/customer';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent {
  otpvarify: boolean = false;
  errorvarify:boolean=false;
  isDisable:boolean=false;
  isOTPDisable:boolean=false;
  otp: string;
  isDateOfBirthValid:boolean=true;
  customer: Customer = {
    customerid: 0,
    customername: '',
    customeremail: '',
    customerphone: '',
    customerdob: new Date(),
    customergender: '',
    customeraddress: {  // Address should be an object, not a separate variable
      street: '',
      city: '',
      state: ''
    },
    customernationality: '',
    customerpassword: ''
  };

  constructor(private dataService: DataService, private router: Router, private http: HttpClient) { }

  onSubmit(customerForm: NgForm) {
    this.otpvarify = true;
    this.isDisable=true;
    console.log("Register Verified...." + this.otpvarify);
    this.dataService.registerCustomer(this.customer).subscribe(
      (response: any) => {
        // Handle the response (e.g., show a success message)
        alert('Successfully Registered, check your email for OTP...'); // Display the server response
        console.log('Customer Registered Successfully...', this.customer);
        this.errorvarify=true;
      },
      (error: any) => {
        // Handle errors
        console.error('Registration Error:', error);
        this.errorvarify=false;
        if (error.status === 400) {
          // Handle specific error scenarios for a 400 response
          alert('Registration Failed: Invalid data provided.');
        } else {
          // Handle other error scenarios
          alert('Registration Failed: An error occurred.');
        }
      }
    );
  }

  onSubmitotp(customerForm:NgForm) {
    // Assuming you want to use this.otp to verify OTP
    const enteredOtp = this.otp;
    this.isOTPDisable=true;
    this.http.get(`http://localhost:8080/verifyCustomer/${enteredOtp}`).subscribe(
      (responseotp: any) => {
        // Further implementation after some time...
        if(responseotp){
        alert('OTP verified successfully.');
        this.router.navigate(['/customerlogin']);
        }else{
          alert('Invalid OTP...');
          console.log("Varified failed...");
          this.router.navigate(['/customersignup']);
        }
      }
    );
    
  }
  showNumberErrorMessage = false;   
  validateNameInput() {

    const inputValue = this.customer.customername; 
    // Use a regular expression to check if the input contains numbers
    const numberRegex = /\d+/;
    const hasNumbers = numberRegex.test(inputValue); 
    // Update the flag based on whether numbers are found
    this.showNumberErrorMessage = hasNumbers;
    

  }


  validateDateOfBirth() {
    const selectedDate = new Date(this.customer.customerdob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - selectedDate.getFullYear(); 
    if (age < 18) {
      this.isDateOfBirthValid = false;
    } else {
      this.isDateOfBirthValid = true;
    }
  }

}
