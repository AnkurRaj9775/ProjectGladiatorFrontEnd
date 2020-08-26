import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from "../serviceclass/customerDetails";
import { PassengerDetails } from "../serviceclass/passengerDetails";
import { SeatBookDetails } from "../serviceclass/seatBookDetails";
import { TicketDetails } from "../serviceclass/ticketDetails";
@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  noOfpassenger = new Array<number>();;
  customerdetails :CustomerDetails=new CustomerDetails();
  p :PassengerDetails[]=new Array<PassengerDetails>();
  seatbookdetails :SeatBookDetails[]=new Array<SeatBookDetails>();
  ticketdetails :TicketDetails=new TicketDetails();
  passengerdetails :PassengerDetails=new PassengerDetails();
  
  
 
  constructor() {
    
    
  }
  
  
  seat:number;
  counter:number=0;
  ngOnInit(): void {
    this.noOfpassenger=JSON.parse(sessionStorage.getItem("seatsBooked"));
    this.seat=this.noOfpassenger[0];
    this.seatbookdetails=JSON.parse(sessionStorage.getItem("seatsBooked"));
    this.ticketdetails.busId=Number(sessionStorage.getItem("busId"));
    this.ticketdetails.dateOfJourney=sessionStorage.getItem("date")
    this.ticketdetails.fromCity=sessionStorage.getItem("fromCity");
    this.ticketdetails.toCity=sessionStorage.getItem("toCity");
    this.ticketdetails.totalCost=Number(sessionStorage.getItem("totalFare"));
    this.ticketdetails.noOfSeatsBooked=this.noOfpassenger.length;
    let today = new Date().toLocaleDateString()
    this.ticketdetails.dateOfBooking=today;
  }

  bookTicket()
  {
    
      //sessionStorage.setItem('passengerDetails',String(this.p));
      //console.log(this.p);
      
    
  }

  addPassenger()
  {
    
    this.counter++;
    console.log(this.passengerdetails)
    console.log(this.counter)
    if(this.noOfpassenger.length>=this.counter){
     
      this.seat=this.noOfpassenger[this.counter];
        this.p.push(this.passengerdetails);
    }
    this.passengerdetails =new PassengerDetails();
    console.log(JSON.stringify(this.p)+"test");

  }
}
