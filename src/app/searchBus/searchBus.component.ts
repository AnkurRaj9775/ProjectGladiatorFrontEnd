import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../serviceclass/BusDetails';
import { BusDetailsService } from '../service/BusDetails.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './searchBust.component.html',
  styleUrls: ['./searchBus.component.css']
})
export class SearchComponentComponent implements OnInit {

  data : any;
  details : BusDetails = new BusDetails();

  constructor(private busDetails: BusDetailsService) { }
     
  ngOnInit(): void {
    this.details.fromCity=sessionStorage.getItem('fromCity');
    this.details.toCity=sessionStorage.getItem('toCity');
    this.details.date=sessionStorage.getItem('date');


    this.busDetails.busDetails(this.details).subscribe(data=>{
      
    })
  }
  


}
