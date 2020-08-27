import { Component, OnInit } from '@angular/core';
import { LastMonthRecordAndProfitService } from '../service/last-month-record-and-profit.service';

@Component({
  selector: 'app-registeredcustomerbutnoreservation',
  templateUrl: './registeredcustomerbutnoreservation.component.html',
  styleUrls: ['./registeredcustomerbutnoreservation.component.css']
})
export class RegisteredcustomerbutnoreservationComponent implements OnInit {
 
  dropdown: any;
  customers: any;
  constructor(private lastMonth: LastMonthRecordAndProfitService) { this.dropdown = document.getElementsByClassName("dropdown-btn"); }


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
    this.lastMonth.noReservationCustomer().subscribe(data=>{
       this.customers= data;
    })


  }



}
