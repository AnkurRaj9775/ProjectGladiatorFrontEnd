import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../serviceclass/BusDetails';
import { BusDetailsService } from '../service/BusDetails.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './searchBust.component.html',
  styleUrls: ['./searchBus.component.css']
})
export class SearchComponentComponent implements OnInit {

  details: BusDetails = new BusDetails();
  data: any;
  constructor(private busDetails: BusDetailsService) { }

  ngOnInit(): void {
    const dateOfJourney = new Date(sessionStorage.getItem('date'));
    const day1 = dateOfJourney.getDay();
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = Wday[day1];
    console.log(day);
    this.details.fromCity = sessionStorage.getItem('fromCity');
    this.details.toCity = sessionStorage.getItem('toCity');
    this.details.day=day;
    this.details.date = sessionStorage.getItem('date');
    

    this.busDetails.busDetails(this.details).subscribe(data => {
      this.data = data;
    })
  }



}