import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from "../serviceclass/customerDetails";
import { PassengerDetails } from "../serviceclass/passengerDetails";
import { SeatBookDetails } from "../serviceclass/seatBookDetails";
import { TicketDetails } from "../serviceclass/ticketDetails";
import { BookTicket } from "../serviceclass/bookTicket";
import { BusDetailsService } from "../service/BusDetails.service";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 

  noOfpassenger = new Array<number>();
  totalMembers:number;
  customerdetails :CustomerDetails=new CustomerDetails();
  p :PassengerDetails[]=new Array<PassengerDetails>();
  seatbookdetails :SeatBookDetails[]=new Array<SeatBookDetails>();
  ticketdetails :TicketDetails=new TicketDetails();
  passengerdetails :PassengerDetails=new PassengerDetails();
  
  bookticket:BookTicket=new BookTicket;
  constructor(private busdetails: BusDetailsService) { }

  name:string;
  fare=sessionStorage.getItem("totalFare");
  seats=(JSON.parse(sessionStorage.getItem("seatsBooked")));
  dateOfJourney=sessionStorage.getItem("date");
  from=sessionStorage.getItem("fromCity");
  destination=sessionStorage.getItem("toCity");
  ticketStatus:boolean=false;
  busName=sessionStorage.getItem("busName");
  nameArr = new Array<string>();
  ngOnInit(): void {
    this.noOfpassenger=JSON.parse(sessionStorage.getItem("seatsBooked"));
    this.customerdetails.email=sessionStorage.getItem('customerEmail')
    console.log(this.customerdetails.email+"in payment")
    this.customerdetails.contact=sessionStorage.getItem('customerContact')
    this.seatbookdetails=JSON.parse(sessionStorage.getItem("seatsBooked"));
    this.ticketdetails.busId=Number(sessionStorage.getItem("busId"));
    this.ticketdetails.dateOfJourney=sessionStorage.getItem("date")
    this.ticketdetails.fromCity=sessionStorage.getItem("fromCity");
    this.ticketdetails.toCity=sessionStorage.getItem("toCity");
    this.ticketdetails.totalCost=Number(sessionStorage.getItem("totalFare"));
    this.ticketdetails.noOfSeatsBooked=this.noOfpassenger.length;
    this.p=JSON.parse(sessionStorage.getItem("passengerdetails"));
    // this.name=this.p.find(x=>x!==undefined).name.toString();
    // for(let i=0;i<this.p.length;i++)
    // {
    //   this.name[i].push(this.p[thiname]);
    // }
   // this.name=this.p.filter(x => typeof x!==undefined).shift().name.toString();
  
  
   for(let i=0;i<this.p.length;i++)
     {
        this.passengerdetails=this.p[i];
        this.nameArr.push(this.passengerdetails.name);
     }
     this.name=String(this.nameArr.toString().split(","));
  }


  payNow(form:NgForm)
  {
    console.log(JSON.stringify(this.p)+"paynow")
    this.bookticket.customerDetails=this.customerdetails;
    console.log(this.bookticket.customerDetails+" final")
    console.log(JSON.stringify(this.customerdetails)+ " intermediate")
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
  sessionStorage.clear();
}


}
