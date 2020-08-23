import { Injectable } from '@angular/core';

import { BusDetails } from "../serviceclass/BusDetails";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {

  constructor(private http:HttpClient) { }

 
}
