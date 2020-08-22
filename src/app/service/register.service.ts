import { Injectable } from '@angular/core';

import { Customer } from "../serviceclass/Customer";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(customer:Customer):Observable<any>{
    return this.http.post("http://localhost:8080/register",customer);
  }
}
