import { Customer } from "./customer"
import { HotelInformation } from "./hotel-information"

export class BookingInformation 
{
    bookingid:number
    checkindate: Date
    checkoutdate:Date
    totalamount:number
    customer:Customer
    bookingdate:any
    hotelinformation:HotelInformation

    constructor(
        bookingid:number,
    checkindate: Date,
    checkoutdate:Date,
    totalamount:number,
    customer:Customer,
    bookingdate:any,
    hotelinformation:HotelInformation
    ){
        this.bookingid=bookingid;
        this.checkindate=checkindate;
        this.checkoutdate=checkoutdate;
        this.totalamount=totalamount;
        this.customer=customer;
        this.bookingdate=bookingdate;
        this.hotelinformation=hotelinformation;
    }
}
