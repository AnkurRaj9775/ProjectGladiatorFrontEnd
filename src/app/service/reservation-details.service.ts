import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailsService {

  constructor(private http:HttpClient) {}

  reservationDetails() : Observable<any>{
    return this.http.get("http://localhost:8181/dailyReservationDetails");
  }

  reservationDetailsWeekly() :Observable<any>{
    return this.http.get("http://localhost:8181/weeklyReservationDetails");
  }

  reservationDetailsMonthly() : Observable<any>{
    return this.http.get("http://localhost:8181/monthlyReservationDetails");
  }

}
