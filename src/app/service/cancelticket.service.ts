import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CancelTicket } from "../serviceclass/cancelticket";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CancelticketService {

  constructor(private http:HttpClient) { }

  cancelTicket(ct:CancelTicket):Observable<any>
  {
    return  this.http.post("http://localhost:8181/cancelTicket",ct);
  }

}
