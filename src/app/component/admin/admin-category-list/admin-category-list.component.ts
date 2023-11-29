import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomCategory } from 'src/app/Entity/room-category';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  roomcategory: RoomCategory[] = [];
  page: number = 1;
  pageSize: number = 10;


  constructor(
    private dataService:DataService,
    private router:Router,
    @Inject(DOCUMENT) private document: Document
  ){}

  ngOnInit(): void {
    this.dataService.getAllRoomCategory().subscribe((customerResponse: RoomCategory[]) => {
      this.roomcategory = customerResponse;
    });
  }

  pageEvent(event: any) {
    this.page = event.pageIndex + 1;
  }

  deleteRoom(roomcategoryid: number) {
    if (confirm('Are you sure you want to delete this room category?')) {
      this.dataService.deleteRoomCategoryById(roomcategoryid).subscribe(() => {
        // After deleting, you can update the room category list
        this.dataService.getAllRoomCategory().subscribe((response: RoomCategory[]) => {
          this.roomcategory = response;
        });
      });
    }
    this.document.location.reload();
  }

  addRoomCategory() {
    // Add your navigation logic to the "Add" page here
    this.router.navigate(['/admincategoryadd'])
  }
}
