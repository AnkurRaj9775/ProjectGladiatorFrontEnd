import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForgotPassword } from "../serviceclass/forgotpassword";
import { CancelLoggedTicket } from "../serviceclass/CancelLoggedTicket";
@Injectable({
  providedIn: 'root'
})
export class MyBookingsService {

  constructor(private http:HttpClient) { }

  myBooking( mybook: ForgotPassword):Observable<any>{
    console.log("service called")
    return this.http.post("http://localhost:8181/myBookings",mybook);
  }
  
  cancelTicket(cancelTicket:CancelLoggedTicket):Observable<any>
  {
    return this.http.post("http://localhost:8181/loggedInCancel",cancelTicket);
  }
}
