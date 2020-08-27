import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  dropdown:any;

  constructor(private router:Router) {  this.dropdown = document.getElementsByClassName("dropdown-btn"); 
  if(!sessionStorage.getItem('customerId')){
    this.router.navigate(['homeLink']);
    }

}


ngOnInit(): void {
  for(var i = 0; i <this.dropdown.length; i++) {
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
if(sessionStorage.getItem('justOnce')=="false"){
  sessionStorage.setItem('justOnce',"true");
  window.location.reload();
  }

}
}