import { Component, OnInit } from '@angular/core';
import { BusDetailsService } from "../service/BusDetails.service";
import { SeatDetails } from '../serviceclass/SeatDetails';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-seatmap',
  templateUrl: './seatmap.component.html',
  styleUrls: ['./seatmap.component.css']
})
export class SeatmapComponent implements OnInit {
  tempid: any;
  fare: number = 0;
  totalFare: number = 0;
  constructor(private busdetails: BusDetailsService, private router: Router) { }
  selected: boolean = false;
  selectSeats = new Array<number>();
  selectedSeatNumber: string;
  seatdetails: SeatDetails = new SeatDetails();
  limitExceeds: string = "Cannot book more than 3 Seats."
  limit: boolean = false;
  selectseat(idin: any) {

    this.tempid = idin;
    var s;
    var id = document.getElementById(idin)

    var result = this.findIndex(idin);

    if (result >= 0) {
      this.limit = false;
      this.selectSeats.splice(result, 1);
      document.getElementById(idin).style.backgroundColor = "rgb(211, 183, 183)";
      // var x = document.getElementById(idin);
      // x.setAttribute("src", "../assets/bookseat.png");
      if (this.selectSeats.length == 0) {
        this.fare = 0;
        this.totalFare = this.fare;
      }
      else {
        this.fare = this.fare - Number(sessionStorage.getItem('fare'));
        this.totalFare = this.fare;
      }
    }
    else {
       ("else callled");

      if (this.selectSeats.length == 0) {
        this.fare = Number(sessionStorage.getItem('fare'));
        this.totalFare = this.fare;
      }
      if (this.selectSeats.length <= 2) {

        this.selectSeats.push(idin);
        this.myFunction(idin);
        this.fare = Number(sessionStorage.getItem('fare')) * this.selectSeats.length;
        this.totalFare = this.fare;
      }
      else {
        this.limit = true;
      }
    }
    // this.selectSeats.sort((a,b)=>a-b)
    // this.selectedSeatNumber = String(this.selectSeats.sort().toString().split(","));
  
    this.selectedSeatNumber = (String(this.selectSeats.sort((a,b)=>a-b)));
  }


  myFunction(idin) {
     (idin + " inside func");
    document.getElementById(idin).style.backgroundColor = "yellow";
  }
  findIndex(id1) {

    for (let i = 0; i < this.selectSeats.length; i++) {

      if (id1 == this.selectSeats[i]) {
        return i;
      }

    }
    return -1;
  }

  changeSeatColor(seatNo) {
     ("called")
    var x = document.getElementById(seatNo);
     (x);
    x.setAttribute("src", "../assets/bseat.png");
    var element = <HTMLInputElement>document.getElementById(seatNo);

    element.disabled = true;

  }


  key = new Array<number>();
  ngOnInit(): void {
    this.seatdetails.busId = Number(sessionStorage.getItem('busId'));
    this.seatdetails.dateOfJourney = String(sessionStorage.getItem('date'));
    
    this.busdetails.noOfSeats(this.seatdetails).subscribe(data => {
      this.key = data.noOfseats;
       
      for (let i = 0; i < this.key.length; i++) {
         ("for loop")
        this.changeSeatColor(this.key[i]);
      }
       ("after lop")
    })

  }
  storeSeatDetails() {
    sessionStorage.setItem("seatsBooked", JSON.stringify(this.selectSeats));
    sessionStorage.setItem("totalFare", String(this.totalFare));
    this.router.navigate(['bookTicket']);
  }


}
