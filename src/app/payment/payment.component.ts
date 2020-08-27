import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from "../serviceclass/customerDetails";
import { PassengerDetails } from "../serviceclass/passengerDetails";
import { SeatBookDetails } from "../serviceclass/seatBookDetails";
import { TicketDetails } from "../serviceclass/ticketDetails";
import { BookTicket } from "../serviceclass/bookTicket";
import { BusDetailsService } from "../service/BusDetails.service";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  name:string;
  fare:number;
  seats:string;
  dateOfJourney:string;
  from:string;
  destination:string;
  ticketStatus:boolean=false;

  noOfpassenger = new Array<number>();
  totalMembers:number;
  customerdetails :CustomerDetails=new CustomerDetails();
  p :PassengerDetails[]=new Array<PassengerDetails>();
  seatbookdetails :SeatBookDetails[]=new Array<SeatBookDetails>();
  ticketdetails :TicketDetails=new TicketDetails();
  passengerdetails :PassengerDetails=new PassengerDetails();
  
  bookticket:BookTicket=new BookTicket;
  constructor(private busdetails: BusDetailsService) { }


 

  ngOnInit(): void {
    this.customerdetails.email=sessionStorage.getItem("customerEmail")
    this.customerdetails.email=sessionStorage.getItem("customerContact")
    this.seatbookdetails=JSON.parse(sessionStorage.getItem("seatsBooked"));
    this.ticketdetails.busId=Number(sessionStorage.getItem("busId"));
    this.ticketdetails.dateOfJourney=sessionStorage.getItem("date")
    this.ticketdetails.fromCity=sessionStorage.getItem("fromCity");
    this.ticketdetails.toCity=sessionStorage.getItem("toCity");
    this.ticketdetails.totalCost=Number(sessionStorage.getItem("totalFare"));
    this.ticketdetails.noOfSeatsBooked=this.noOfpassenger.length;
    this.p=JSON.parse(sessionStorage.getItem("passengerdetails"));
  }


  payNow()
  {
    console.log(JSON.stringify(this.p)+"paynow")
    this.bookticket.customerDetails=this.customerdetails;
    this.bookticket.passengerDetails=this.p;
    
    this.bookticket.seatDetails=this.seatbookdetails;
    this.bookticket.ticketDetails=this.ticketdetails;
    console.log(JSON.stringify(this.bookticket))
    this.busdetails.bookMyticket(this.bookticket).subscribe(data => {
      console.log(data);
      if(!data.resultStatus)
      {
        this.ticketStatus=data.resultStatus;
      }
      else{
        this.ticketStatus=data.resultStatus;
       
    }
  })
}


}
