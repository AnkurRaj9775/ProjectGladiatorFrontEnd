import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usern:any=sessionStorage.getItem('customerId');
  
  
  
  constructor() { }

  toggle(){
    
  }

  ngOnInit(): void {
    console.log(this.usern);
  }

}
