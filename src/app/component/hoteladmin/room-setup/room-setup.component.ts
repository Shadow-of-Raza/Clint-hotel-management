import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-room-setup',
  templateUrl: './room-setup.component.html',
  styleUrls: ['./room-setup.component.css']
})
export class RoomSetupComponent implements OnInit {
  hotelAdminId: number;
  hotelid: number;
  id: number;
  roomId: string;
  roomid: number;

  roomInformation: any = {
    roomnumber: 0,
    //your id : this.hotelAdminId = Number(sessionStorage.getItem('hoteladminid'));
    cloneHotelAdminId: Number(sessionStorage.getItem('hoteladminid')),
    roompriceperday: 0,
    roomdescription: '',
    roomimageurl: '',
    numberofpeople: ''
  };
  selectedCategory: number;
  selectedServices: number[] = [];

  categories: any[] = [];
  services: any[] = [];

  constructor(private apiService: DataService,private router: Router) {
    // Load categories and services from your API
    this.selectedServices = [];
    this.loadCategories();
    this.loadServices();
  }

  loadCategories() {
    this.apiService.getAllRoomCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  loadServices() {
    this.apiService.getAllRoomService().subscribe((response: any) => {
      this.services = response;
    });
  }

  submitRoomSetupForm() {
    console.log(this.selectedServices);

    // Send the form data to your API for processing
    const roomSetupData = {
      roomInformation: this.roomInformation,
      roomCategoryId: this.selectedCategory,
      roomServiceIds: this.selectedServices
    };
    console.log(roomSetupData);

    this.apiService.setupRoom(roomSetupData).subscribe((response: any) => {
      if (response) {
        this.roomInformation = response;
        this.id = this.roomInformation.roomid;
        this.roomId = this.id.toString();
        this.roomid = Number(this.roomId);
        this.setHotelAdminidAndHotelid(this.roomid); 
        alert('room added successfully');
      } else {
        alert('Invalid Data ..');
      }
    },(error:any)=>{
      if(error.status==500){
        alert('Invalid Data...Your URL Must be unique...');
      }
      if(error.status==400){
        alert('Invalid Data...Your URL Must be unique...');
      }
    }
    );
  }

  isSelected(serviceId: number): boolean {
    return this.selectedServices.includes(serviceId);
  }

  toggleSelection(serviceId: number) {
    if (this.isSelected(serviceId)) {
      // Deselect the service
      this.selectedServices = this.selectedServices.filter((id) => id !== serviceId);
    } else {
      // Select the service
      this.selectedServices.push(serviceId);
    }
  }
 
  roomPriceError=false; 
  roomNumberError = false; // Flag to control when to show the error message
   

  validateRoomNumber() {
    const roomNumber = this.roomInformation.roomnumber; 
    if (roomNumber !== null && roomNumber < 0) {
      this.roomInformation.roomnumber = null;
      this.roomNumberError = true;   
    }
    else{
      this.roomNumberError = false;
    }
  }
  validateRoomPrice(){
    const roomprice=this.roomInformation.roompriceperday;
    if(roomprice!==null && roomprice<0){ 
      this.roomInformation.roompriceperday=null;
      this.roomPriceError=true;
    } 
    else{
     this.roomPriceError=false;
    }
  }



  ngOnInit() {
    // Additional initialization logic
  }

  setHotelAdminidAndHotelid(roomid1: number) {
    // fetch the id from the login component
    this.hotelAdminId = Number(sessionStorage.getItem('hoteladminid'));
    console.log('Hotel admin Id in Room add component', this.hotelAdminId);

    // fetch the id from the login component
    this.hotelid = Number(sessionStorage.getItem('hotelid'));
    console.log('Hotel Id in Room add component', this.hotelid);

    this.apiService.setHotelAdminidAndHotelid(roomid1, this.hotelAdminId, this.hotelid).subscribe(
      data => {
        this.router.navigate(['/hoteladminroomlist']);
        console.log(data);
      }
    );
  }
}