import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CopyrightComponent } from './component/guestguru/copyright/copyright.component';
import { FooterComponent } from './component/guestguru/footer/footer.component';
import { ListyourpropertyComponent } from './component/guestguru/listyourproperty/listyourproperty.component';
import { NavbarComponent } from './component/guestguru/navbar/navbar.component';
import { DashboardComponent } from './component/guestguru/dashboard/dashboard.component';
import { AboutComponent } from './component/guestguru/about/about.component';
import { ContactComponent } from './component/guestguru/contact/contact.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './component/admin/adminsignup/adminsignup.component';
import { AdminHoteladminListComponent } from './component/admin/admin-hoteladmin-list/admin-hoteladmin-list.component';
import { AdminHoteldetailsListComponent } from './component/admin/admin-hoteldetails-list/admin-hoteldetails-list.component';
import { AdminCategoryAddComponent } from './component/admin/admin-category-add/admin-category-add.component';
import { AdminCategoryListComponent } from './component/admin/admin-category-list/admin-category-list.component';
import { AdminServiceListComponent } from './component/admin/admin-service-list/admin-service-list.component';
import { AdminServiceAddComponent } from './component/admin/admin-service-add/admin-service-add.component';
import { AdminUpdateComponent } from './component/admin/admin-update/admin-update.component';
import { AdminLogoutComponent } from './component/admin/admin-logout/admin-logout.component';
import { CustomerDashboardComponent } from './component/customer/customer-dashboard/customer-dashboard.component';
import { CustomerSignupComponent } from './component/customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './component/customer/customer-login/customer-login.component';
import { CustomerLogoutComponent } from './component/customer/customer-logout/customer-logout.component';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { HoteladminDashboardComponent } from './component/hoteladmin/hoteladmin-dashboard/hoteladmin-dashboard.component';
import { HoteladminHotelAddComponent } from './component/hoteladmin/hoteladmin-hotel-add/hoteladmin-hotel-add.component';
import { HoteladminHotelListComponent } from './component/hoteladmin/hoteladmin-hotel-list/hoteladmin-hotel-list.component';
import { HoteladminHotelUpdateComponent } from './component/hoteladmin/hoteladmin-hotel-update/hoteladmin-hotel-update.component';
import { HoteladminLoginComponent } from './component/hoteladmin/hoteladmin-login/hoteladmin-login.component';
import { HoteladminLogoutComponent } from './component/hoteladmin/hoteladmin-logout/hoteladmin-logout.component';
import { HoteladminRoomListComponent } from './component/hoteladmin/hoteladmin-room-list/hoteladmin-room-list.component';
import { HoteladminRoomUpdateComponent } from './component/hoteladmin/hoteladmin-room-update/hoteladmin-room-update.component';
import { HoteladminSignupComponent } from './component/hoteladmin/hoteladmin-signup/hoteladmin-signup.component';
import { HoteladminUpdateComponent } from './component/hoteladmin/hoteladmin-update/hoteladmin-update.component';
import { HotelAdminListComponent } from './component/hoteladmin/hoteladmin-list/hoteladmin-list.component';
import { AdminListComponent } from './component/admin/admin-list/admin-list.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { MakeBookingComponent } from './component/other-components/make-booking/make-booking.component';
import { TermsAndConditionsComponent } from './component/guestguru/terms-and-conditions/terms-and-conditions.component';
import { CustomerBookingComponent } from './component/customer/customer-booking/customer-booking.component';
import { HoteladminCustomerBookingComponent } from './component/hoteladmin/hoteladmin-customer-booking/hoteladmin-customer-booking.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminCustomerListComponent } from './component/admin/admin-customer-list/admin-customer-list.component';
import { AdminHotelstatusUpdateComponent } from './component/admin/admin-hotelstatus-update/admin-hotelstatus-update.component';
import { AdminCustomerUpdateComponent } from './component/admin/admin-customer-update/admin-customer-update.component';
import { AdminHoteladminUpdateComponent } from './component/admin/admin-hoteladmin-update/admin-hoteladmin-update.component';
import { CustomerRoomListComponent } from './component/customer/customer-room-list/customer-room-list.component';
import { OurTeamComponent } from './component/guestguru/our-team/our-team.component';
import { HoteladminActiveBookingComponent } from './component/hoteladmin/hoteladmin-active-booking/hoteladmin-active-booking.component';
import { RoomSetupComponent } from './component/hoteladmin/room-setup/room-setup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomerProfileUpdateComponent } from './component/customer/customer-profile-update/customer-profile-update.component';
import { HoteladminProfileUpdateComponent } from './component/hoteladmin/hoteladmin-profile-update/hoteladmin-profile-update.component';





@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    FooterComponent,
    ListyourpropertyComponent,
    NavbarComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdminHoteladminListComponent,
    AdminHoteldetailsListComponent,
    CustomerListComponent,
    AdminCategoryAddComponent,
    AdminCategoryListComponent,
    AdminServiceListComponent,
    AdminServiceAddComponent,
    AdminUpdateComponent,
    AdminLogoutComponent,
    CustomerDashboardComponent,
    CustomerSignupComponent,
    CustomerLoginComponent,
    CustomerLogoutComponent,
    CustomerUpdateComponent,
    HoteladminDashboardComponent,
    HoteladminHotelAddComponent,
    HoteladminHotelListComponent,
    HoteladminHotelUpdateComponent,
    HoteladminLoginComponent,
    HoteladminLogoutComponent,
    HoteladminRoomListComponent,
    HoteladminRoomUpdateComponent,
    HoteladminSignupComponent,
    HoteladminUpdateComponent,
    HotelAdminListComponent,
    AdminListComponent,
    CustomerListComponent,
    MakeBookingComponent,
    TermsAndConditionsComponent,
    CustomerBookingComponent,
    HoteladminCustomerBookingComponent,
    AdminCustomerListComponent,
    AdminHotelstatusUpdateComponent,
    AdminCustomerUpdateComponent,
    AdminHoteladminUpdateComponent,
    CustomerRoomListComponent,
    OurTeamComponent,
    HoteladminActiveBookingComponent,
    RoomSetupComponent,
    CustomerProfileUpdateComponent,
    HoteladminProfileUpdateComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



/**

BrowserModule: This module is required for running your Angular application in a web browser. It provides essential services and directives that enable Angular to run in a browser environment.

AppRoutingModule: This module is used for setting up routing in your Angular application. It allows you to define routes for different components and navigate between them based on user actions or application state changes.

FormsModule: FormsModule is a module that provides support for creating forms in Angular applications. It includes directives and services that enable two-way data binding and form validation, making it easier to work with user input and data submission.

CommonModule: CommonModule provides commonly used directives like ngIf, ngFor, etc., along with other utilities that are helpful when building Angular components and templates. It's typically imported in feature modules to gain access to these common directives and utilities.

HttpClientModule: HttpClientModule is used for making HTTP requests in Angular applications. It provides the HttpClient service, which allows you to fetch data from remote servers or interact with APIs over the HTTP protocol.

MatPaginatorModule: MatPaginatorModule is part of Angular Material, a UI component library. MatPaginatorModule specifically provides the pagination feature, allowing you to split large sets of data into multiple pages for easier navigation and viewing in your application.
 

*/