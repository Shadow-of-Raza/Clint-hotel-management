import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  customername: string = '';   // Declare name property
  from: string = '';  // Declare email property
  subject: string = ''; // Add other properties as needed
  message: string = ''; // Add other properties as needed

  constructor(private dataService: DataService, private router: Router, private http: HttpClient) {}

  onSubmit(contactForm: NgForm) {
    const formData = {
      customername: this.customername,
      from: this.from,
      subject: this.subject,
      body: this.message,
    }; 
    this.dataService.sendEmailToAdmin(formData).subscribe(
        (response: any) => {
          alert('Mail sent successfully.....');
          // Reset the form after a successful submission
          contactForm.resetForm();
        },
        (error: any) => {
          alert('Enter your details correctly');
        }
      );
  }
}