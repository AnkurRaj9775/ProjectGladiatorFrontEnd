import { Component, OnInit } from '@angular/core';
import { ReservationDetailsService } from '../service/reservation-details.service';

@Component({
  selector: 'app-reservationdetails',
  templateUrl: './reservationdetails.component.html',
  styleUrls: ['./reservationdetails.component.css'],
})
export class ReservationdetailsComponent implements OnInit {
  dropdown: any;
  daily: any;
  weekly: any;
  monthly: any;

  constructor(private registerService: ReservationDetailsService) {
    this.dropdown = document.getElementsByClassName('dropdown-btn');
  }

  ngOnInit(): void {
    for (var i = 0; i < this.dropdown.length; i++) {
      this.dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }
  reserveDaily() {
    this.registerService.reservationDetails().subscribe((data) => {
      this.daily = data;
    });    
  }

  reserveWeekly() {
    this.registerService.reservationDetailsWeekly().subscribe((data) => {
      this.weekly = data;
    });
  }

  reserveMonthly() {
    this.registerService.reservationDetailsMonthly().subscribe((data) => {
      this.monthly = data;
    });
  }
}
