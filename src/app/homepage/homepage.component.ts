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


  constructor() {
    sessionStorage.removeItem('fromCity');
    sessionStorage.removeItem('toCity');
    sessionStorage.removeItem('date');
  }  

  setValue(){
    sessionStorage.setItem('fromCity',this.fromCity);
    sessionStorage.setItem('toCity',this.toCity);
    sessionStorage.setItem('date',this.date);

  }
  ngOnInit(): void {
   
    let today = new Date().toISOString().split('T')[0];
    console.log(today);
  document.getElementsByName("trip-start")[0].setAttribute('min', today);

  if (!localStorage.justOnce){
    localStorage.setItem('justOnce',"true");  
    location.reload();
  }
}
}