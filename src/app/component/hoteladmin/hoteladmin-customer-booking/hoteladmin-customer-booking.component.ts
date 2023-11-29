import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-customer-booking',
  templateUrl: './hoteladmin-customer-booking.component.html',
  styleUrls: ['./hoteladmin-customer-booking.component.css']
})
export class HoteladminCustomerBookingComponent implements OnInit {
  bookingInformation: any[] = [];
  hotelid: number;

  currentPage: number = 1;
  itemsPerPage: number = 5; // Number of items to display per page

  buttondissable:boolean=true;
  
  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute){}

  ngOnInit() {
    this.hotelid = Number(sessionStorage.getItem('hotelid'));
    this.loadBookinghistoryData();
  }

  loadBookinghistoryData() {
    this.dataService.getAllBookingInformationByHotelId(this.hotelid).subscribe(
      (bookingResponse: any[]) => {
        this.bookingInformation = bookingResponse;
        
      }
    );
  }
  
  loadActiveBookinghistoryData(){
    this.router.navigate(['/hoteladminactivebooking']);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.bookingInformation.length);
  }

  get pagedBookingData() {
    return this.bookingInformation.slice(this.startIndex, this.endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  get totalPages() {
    return Math.ceil(this.bookingInformation.length / this.itemsPerPage);
  }

  getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
