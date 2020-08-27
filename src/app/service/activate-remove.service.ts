import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivateRemove } from "../serviceclass/ActivateRemove";
@Injectable({
  providedIn: 'root'
})
export class ActivateRemoveService {

  constructor(private http:HttpClient) {}
  activateBus(activate :ActivateRemove):Observable<any>{
    return this.http.post("http://localhost:8181/addBus",activate);

   }
   removeBus(remove :ActivateRemove):Observable<any>{
    return this.http.post("http://localhost:8181/removeBus",remove);
   }

   showbus():Observable<any>{
     return this.http.get("http://localhost:8181/showbus")
   }

}
