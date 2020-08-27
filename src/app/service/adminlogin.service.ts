import { Injectable } from '@angular/core';
import { Login } from "../serviceclass/login";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  adminlogin(adlogin :Login):Observable<any>{
     ("inside admin service")
    return this.http.post("http://localhost:8181/loginAdminUser",adlogin);
  }
}
