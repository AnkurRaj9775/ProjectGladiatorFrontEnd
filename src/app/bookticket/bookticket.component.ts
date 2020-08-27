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
   
    
    sessionStorage.setItem('passengerdetails',JSON.stringify(this.p));
    sessionStorage.setItem('customerEmail',this.customerdetails.email);
    sessionStorage.setItem('customerContact',this.customerdetails.contact );
      this.router.navigate(['payment']);
  }

  addPassenger()
  {
    
    
    if(this.noOfpassenger.length-1>=this.counter){
      this.counter++;
      this.seat=this.noOfpassenger[this.counter];
        this.p.push(this.passengerdetails);
        this.passengerdetails =new PassengerDetails();
        if(this.counter==this.noOfpassenger.length)
        {
        var element = <HTMLInputElement>document.getElementById("addPass");
       
     element.disabled = true;
    }
  }


  }


  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  manageMobile(id) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
      mobile.value = data;
    else
      mobile.value = data.substring(0, 5) + " " + data.substring(5, data.length);
  }

  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
}
