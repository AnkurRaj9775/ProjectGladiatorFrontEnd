import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  //userName:string;

  constructor(private router:Router) {
    if(!sessionStorage.getItem('customerId')){
      this.router.navigate(['loginCustomer']);
    }
   }

  ngOnInit(): void {
  }

}
