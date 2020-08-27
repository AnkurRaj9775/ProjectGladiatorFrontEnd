import { Component, OnInit } from '@angular/core';
import{ LastMonthRecordAndProfitService } from '../service/last-month-record-and-profit.service';

@Component({
  selector: 'app-lastmonthrecordsandprofit',
  templateUrl: './lastmonthrecordsandprofit.component.html',
  styleUrls: ['./lastmonthrecordsandprofit.component.css']
})
export class LastmonthrecordsandprofitComponent implements OnInit {

  dropdown: any;
  data : any;   

  constructor(private lastMonth: LastMonthRecordAndProfitService) 
  {
     this.dropdown = document.getElementsByClassName("dropdown-btn"); 
  }

  ngOnInit(): void {
    for (var i = 0; i < this.dropdown.length; i++) {
      this.dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
    this.lastMonth.lastMonth().subscribe(data=>{
        this.data = data;
    })
  }
  
}


