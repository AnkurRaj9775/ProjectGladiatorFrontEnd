import { Injectable } from '@angular/core';
import { Admin } from "../serviceclass/Admin";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) {}

  login(admin:Admin):Observable<any>{
    return this.http.post("http://localhost:8181/register",Admin);

   }
}
