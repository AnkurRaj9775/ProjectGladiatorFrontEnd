import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private http:HttpClient) { }

  viewMostPreferredTypeBus():Observable<any>{
    return this.http.get("http://localhost:8181/mostPrefferedBusType");
  }
}
