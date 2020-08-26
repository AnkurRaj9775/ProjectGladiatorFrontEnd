import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from "../serviceclass/customerDetails";
import { PassengerDetails } from "../serviceclass/passengerDetails";
import { SeatBookDetails } from "../serviceclass/seatBookDetails";
import { TicketDetails } from "../serviceclass/ticketDetails";
import { BookTicket } from "../serviceclass/bookTicket";
import { BusDetailsService } from "../service/BusDetails.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  noOfpassenger = new Array<number>();
  totalMembers:number;
  customerdetails :CustomerDetails=new CustomerDetails();
  p :PassengerDetails[]=new Array<PassengerDetails>();
  seatbookdetails :SeatBookDetails[]=new Array<SeatBookDetails>();
  ticketdetails :TicketDetails=new TicketDetails();
  passengerdetails :PassengerDetails=new PassengerDetails();
  
  bookticket:BookTicket=new BookTicket;
 
 
  constructor(private router:Router ) {
   
  }
  
  
  seat:number;
  counter:number=0;
  ngOnInit(): void {

    this.noOfpassenger=JSON.parse(sessionStorage.getItem("seatsBooked"));
    this.seat=this.noOfpassenger[0];
    
    this.totalMembers=this.noOfpassenger.length;
  }

  bookTicket()
  {
   
    
    sessionStorage.setItem("passengerdetails",JSON.stringify(this.p));
    console.log(JSON.stringify(this.p))
    console.log(JSON.stringify(sessionStorage.getItem("passengerdetails")));
    sessionStorage.setItem("customerEmail",this.customerdetails.email );
    sessionStorage.setItem("customerContact",this.customerdetails.contact );
      this.router.navigate(['payment']);
  }

  addPassenger()
  {
    
    
    console.log(JSON.stringify(this.passengerdetails)+"addpassenger")
    console.log(this.counter+"in")
    if(this.noOfpassenger.length-1>=this.counter){
      this.counter++;
      this.seat=this.noOfpassenger[this.counter];
        this.p.push(this.passengerdetails);
        this.passengerdetails =new PassengerDetails();
    }
     else{
       console.log("inside else")
      var element = <HTMLInputElement>document.getElementById("addPass");
       
     element.disabled = true;
     }

    
    console.log(JSON.stringify(this.p)+"test");

  }
}
