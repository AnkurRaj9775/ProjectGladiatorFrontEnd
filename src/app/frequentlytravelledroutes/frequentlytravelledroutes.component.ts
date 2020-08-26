import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequentlytravelledroutes',
  templateUrl: './frequentlytravelledroutes.component.html',
  styleUrls: ['./frequentlytravelledroutes.component.css']
})
export class FrequentlytravelledroutesComponent implements OnInit {

  dropdown: any;

  constructor() { this.dropdown = document.getElementsByClassName("dropdown-btn"); }


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
  }
}
