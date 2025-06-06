import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-signup',
  templateUrl: './hoteladmin-signup.component.html',
  styleUrls: ['./hoteladmin-signup.component.css']
})
export class HoteladminSignupComponent {

  hoteladmin: any = {
    hoteladminname: '',
    hoteladminemail: '',
    hoteladminphonenumber: '',
    hoteladminpassword: ''
  };
  otp: string;
  enteredOtp: string;

  errorvatify:boolean=false;
  otpvarify: boolean = false;
  isDisable:boolean=false;
  isOTPDisable:boolean=false;



 

  
  constructor(private dataService: DataService, private router: Router,private http:HttpClient) { }

  onSubmit(hoteladminForm: NgForm) {
    this.otpvarify = true;
    this.isDisable=true;
    console.log("register Verified...." + this.otpvarify);
    this.dataService.registerHotelAdmin(this.hoteladmin).subscribe(
      (response: any) => {
        // Handle the response (e.g., show a success message)
        alert('Successfully Registerd check you email for otp...'); // Display the server response
        console.log('Hotel Admin Registered Successfully...', this.hoteladmin);
        this.errorvatify=true;
      },
      (error: any) => {
        // Handle errors
        console.error('Registration Error:', error);
        this.errorvatify=false;
        if (error.status === 400) {
          // Handle specific error scenarios for a 400 response
          alert('Registration Failed: Invalid data provided.');
          // reset form
        } else {
          // Handle other error scenarios
          alert('Registration Failed: An error occurred.');
        }
      }
    );
  }

  onSubmitotp(hoteladminForm: NgForm) {
    const enteredOtp = this.otp;
    this.isOTPDisable=true;
    this.http.get(`http://localhost:8080/verifyHotelAdmin/${enteredOtp}`).subscribe(
      (responseotp: any) => {
        if(responseotp){
        alert('OTP verified successfully.');
        this.router.navigate(['/hoteladminlogin']);
        }else{
          alert('Invalid OTP');
          console.log("Varified failed...");
          this.router.navigate(['/hoteladminsignup']);
        }
      }
    );
  } 

  showNumberErrorMessage = false; // Flag to control when to show the number error message

  validateNameInput() {
    const inputValue = this.hoteladmin.hoteladminname;
    
    // Use a regular expression to check if the input contains numbers
    const numberRegex = /\d+/;
    const hasNumbers = numberRegex.test(inputValue);
    
    // Update the flag based on whether numbers are found
    this.showNumberErrorMessage = hasNumbers;
  }
}

