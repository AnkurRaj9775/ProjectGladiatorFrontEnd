import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usern:any=sessionStorage.getItem('customerId');
  
  
  
  constructor(private router:Router) {
    if(!sessionStorage.getItem('customerId')){
      this.router.navigate(['loginCustomer']);
    }
   }

  toggle(){
    
  }

  ngOnInit(): void {
     (this.usern);
  }

}
