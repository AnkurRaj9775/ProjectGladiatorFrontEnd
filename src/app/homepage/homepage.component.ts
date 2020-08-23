import { Component, OnInit } from '@angular/core';
import { BusDetailsService  } from "../service/BusDetails.service";
import { BusDetails } from "../serviceclass/BusDetails";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  
  fromCity: string;
  toCity: string;
  date : string;

  
  constructor() {}  

  ngOnInit(): void {
    sessionStorage.setItem('fromCity',this.fromCity);
    sessionStorage.setItem('toCity',this.toCity);
    sessionStorage.setItem('date',this.date);
  }
}
