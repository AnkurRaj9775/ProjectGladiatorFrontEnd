import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastMonthRecordAndProfitService {

  constructor(private http:HttpClient) {}
lastMonth():Observable<any>{
  return this.http.get("http://localhost:8181/previousTransaction");
}

noReservationCustomer():Observable<any>{
  return this.http.get("http://localhost:8181/noReservationCustomer");
}
 
}
  
 