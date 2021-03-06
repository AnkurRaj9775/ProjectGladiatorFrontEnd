import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyBookingsService } from "../service/my-bookings.service";
import { ForgotPassword } from "../serviceclass/forgotpassword";
import { CancelLoggedTicket } from "../serviceclass/CancelLoggedTicket";
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  mybook:ForgotPassword=new ForgotPassword();
  constructor(private router:Router,private service:MyBookingsService) {
    if(!sessionStorage.getItem('customerId')){
      this.router.navigate(['loginCustomer']);
    }
   }
   bookings:any;
   status:boolean;
   canticket:CancelLoggedTicket=new CancelLoggedTicket();
   cancelstatus:boolean;
  ngOnInit(): void {
    this.mybook.customerId=Number(sessionStorage.getItem('customerId'));
      this.service.myBooking(this.mybook).subscribe(data =>{
        console.log(data.resultStatus)
        if(data.resultStatus)
        {
          this.status=true;
          this.bookings=data.mybookings;
          console.log(data.mybookings)
          console.log(data.resultStatus)
        }
        else{
        this.status=false;
        }
      })
  }

  cancelTicket(ticketId){
    this.canticket.ticketNo=ticketId;
    this.service.cancelTicket(this.canticket).subscribe(data=>{
      this.cancelstatus=data.resultStatus;
      if(data.resultStatus)
      {
        window.location.reload();
      }
    })
  }
}
