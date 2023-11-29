import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-active-booking',
  templateUrl: './hoteladmin-active-booking.component.html',
  styleUrls: ['./hoteladmin-active-booking.component.css']
})
export class HoteladminActiveBookingComponent implements OnInit {
  bookingInformation: any[] = [];
  hotelid: number;
  currentPage: number = 1;
  itemsPerPage: number = 5; // Number of items to display per page
  bookingId:string;

  bookingid:number;
  
  constructor( @Inject(DOCUMENT) private document: Document,private dataService:DataService, private router:Router, private route:ActivatedRoute){}

  ngOnInit() {
    this.hotelid = Number(sessionStorage.getItem('hotelid'));
    this.loadActiveBookinghistoryData();
  }

  loadActiveBookinghistoryData() {
    this.dataService.getAllActiveBookingInformationByHotelId(this.hotelid).subscribe(
      (bookingResponse: any[]) => {
        this.bookingInformation = bookingResponse;
      }
    );
  }

  isBookedStatus(roomid:number, id:number ){
    this.bookingId=id.toString();

    sessionStorage.setItem('bookingId',this.bookingId);
    this.dataService.reUpdateIsBookedStatusByRoomId(roomid).subscribe(
      data =>{
        alert('Room status updated:');
        this.document.location.reload();
        this.isActiveStatus();
      }
    )
  }

  isActiveStatus(){
    this.bookingid=Number(sessionStorage.getItem('bookingId')); 
    this.dataService.reUpdateActiveStatusByBookingId(this.bookingid).subscribe(
      data =>{
        console.log('Active status is updated: '+data);
        
      }
    )
  }


  // reUpdateIsActiveBy
  hoteladmincustomerbooking(){
    this.router.navigate(['/hoteladmincustomerbooking']);
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
