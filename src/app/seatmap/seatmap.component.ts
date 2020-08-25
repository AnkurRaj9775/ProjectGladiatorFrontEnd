import { Component, OnInit } from '@angular/core';
import { BusDetailsService } from "../service/BusDetails.service";
import { SeatDetails } from '../serviceclass/SeatDetails';
@Component({
  selector: 'app-seatmap',
  templateUrl: './seatmap.component.html',
  styleUrls: ['./seatmap.component.css']
})
export class SeatmapComponent implements OnInit {
  tempid: any;
  constructor(private busdetails : BusDetailsService) { }
  selected: boolean = false;
  selectSeats = new Array<number>();
  seatdetails:SeatDetails=new SeatDetails();
  
  selectseat(idin: any) {
    this.tempid = idin;
    var s;
    var id = document.getElementById(idin)

    var result=this.findIndex(idin);
   
     if(result>=0)
    {
     
      var x = document.getElementById(idin);
      x.setAttribute("src", "../assets/bookseat.png");
      this.selectSeats.splice(result,1);
    }
    else{
      console.log("else callled");
      
      this.selectSeats.push(idin);
      var x = document.getElementById(idin);
      x.setAttribute("src", "../assets/fseat.png");
    }
    console.log(this.selectSeats)
}
   

    findIndex(id1)
    {
      
      for(let i=0;i<this.selectSeats.length;i++){
        
        if (id1 == this.selectSeats[i]) {
          return i;
        }
        
    }
    return -1;
    }
  
    changeSeatColor(seatNo) {
      console.log("called")
      var x = document.getElementById(seatNo);
      x.setAttribute("src", "../assets/bseat.png");
      var element = <HTMLInputElement> document.getElementById(seatNo);
      
      element.disabled = true;
      
    }
    key = new Array<number>();
   ngOnInit(): void {
    this.seatdetails.busId=Number(sessionStorage.getItem('busId'));
    this.seatdetails.dateOfJourney=String(sessionStorage.getItem('date'));
    console.log(this.seatdetails);
    this.busdetails.noOfSeats(this.seatdetails).subscribe(data=>{
      this.key=data.noOfseats;
      console.log(data)
      console.log(this.key)
      for(let i=0;i<this.key.length;i++){
        console.log("for loop")
        this.changeSeatColor(this.key[i]);
      }
        console.log("after lop")
    })
   
  }

  

}
