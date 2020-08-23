import { Injectable } from '@angular/core';

import { BusDetails } from "../serviceclass/BusDetails";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {

  constructor(private http:HttpClient) { }
  busDetails(busDetails :BusDetails):Observable<any>{
    return this.http.post("http://localhost:8080/searchBus",busDetails);
  }
 
}
