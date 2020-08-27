import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from '../service/admindashboard.service';
import { MostPreferredType } from '../serviceclass/mostPreferredType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostpreferredtypeofbuses',
  templateUrl: './mostpreferredtypeofbuses.component.html',
  styleUrls: ['./mostpreferredtypeofbuses.component.css']
})
export class MostpreferredtypeofbusesComponent implements OnInit {

  typeOfBus:string;
  dropdown: any;
  bus:MostPreferredType=new MostPreferredType();

  constructor(private showPreferredBus:AdmindashboardService,private router:Router)
   { this.dropdown = document.getElementsByClassName("dropdown-btn"); 
   if(!sessionStorage.getItem('customerId')){
    this.router.navigate(['homeLink']);
    }
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


    this.showPreferredBus.viewMostPreferredTypeBus().subscribe(data=>{
      this.typeOfBus=data.busType;
    })

    
  }
}
