import { Component, OnInit } from '@angular/core';
import { BusDetailsService  } from "../service/BusDetails.service";
import { BusDetails } from "../serviceclass/BusDetails";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  details :BusDetails=new BusDetails();
 

   searchBus(){
   
    this.loginService.login(this.login).subscribe(data =>{
  
      if(!data.resultStatus)
      {
        this.clientstatus=data.resultStatus;
      }
      else{
        this.clientstatus=data.resultStatus;
        let customerId=data.customerId;
         let customerName=data.name;

    sessionStorage.setItem('customerId',customerId);
    sessionStorage.setItem('customerName',customerName);  
      this.router.navigate(['dashboard']);
      }
    })
  }

  constructor(private busService :BusDetailsService) {}

  ngOnInit(): void {}
}
