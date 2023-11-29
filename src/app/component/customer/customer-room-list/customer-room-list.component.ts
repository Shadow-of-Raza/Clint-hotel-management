import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoomCategory } from 'src/app/Entity/room-category';
import { RoomInformation } from 'src/app/Entity/room-information';
import { RoomService } from 'src/app/Entity/room-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-room-list',
  templateUrl: './customer-room-list.component.html',
  styleUrls: ['./customer-room-list.component.css']
})
export class CustomerRoomListComponent 
{
  hotelId:number;
  roomInformation: RoomInformation[];
  hotelinformation: any;
  id: any;
  hotelname:any;
  hotellocation:any;
  categories: any[] = [];

  roomcategory:RoomCategory;
  roomservice:RoomService[];
  price:string;
  roomid:string;
  roomcategoryid:number;

  page: number = 1;
  pageSize: number = 2;


  constructor(
    private dataService: DataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(){

    this.hotelId = Number(sessionStorage.getItem('hotelid'));
   
    this.hotelname = sessionStorage.getItem('hotelname');

    this.hotellocation = sessionStorage.getItem('hotellocation');



    sessionStorage.removeItem('hotelname-booking');
    sessionStorage.removeItem('numberofpeople-booking');
    sessionStorage.removeItem('hotellocation-booking');
    sessionStorage.removeItem('roomdescription-booking');
    sessionStorage.removeItem('roomimageurl-booking');
    sessionStorage.removeItem('price-booking');
    sessionStorage.removeItem('roomid-booking');
    this.loadCategories();
    this.dataService.getAllRoomInformationByHotelId( this.hotelId ).subscribe( 
      (rawData: RoomInformation[])=>{
        this.roomInformation=rawData;
        this.roomInformation.forEach((room: RoomInformation) => {
          if (!Array.isArray(room.roomservice)) {
            room.roomservice = [room.roomservice];
          }
        }); 
      }
    )

  }
  pageEvent(event: any) {
    this.page = event.pageIndex + 1;
  }
  

  makebooking(hotelname:string,roompriceperday:number,numberofpeople:string, hotellocation:string, roomdescription:string, roomimageurl:string, roomid:number){
    
    sessionStorage.setItem('hotelname-booking',hotelname);
    sessionStorage.setItem('numberofpeople-booking',numberofpeople);
    sessionStorage.setItem('hotellocation-booking',hotellocation);
    sessionStorage.setItem('roomdescription-booking',roomdescription);
    sessionStorage.setItem('roomimageurl-booking',roomimageurl);

    this.roomid=roomid.toString();
    sessionStorage.setItem('roomid-booking',this.roomid);

    this.price=roompriceperday.toString();
    sessionStorage.setItem('price-booking',this.price);

    this.router.navigate(['/makebooking']);
  }

  loadCategories() {
    this.dataService.getAllRoomCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  searchRooms(){
    this.dataService.getAllRoomInformationByHotelIdAndCategoryId(this.hotelId, this.roomcategoryid).subscribe(
      (responce:any[])=>{
        this.roomInformation=responce;
      }
    )
  }

  

}