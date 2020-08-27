import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Login } from "../serviceclass/login";
import { LoginService } from "../service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  login :Login=new Login();
  clientstatus:boolean=true;

  constructor(private loginService :LoginService,private router:Router) { }
  
  ngOnInit(): void {
  }

  loginUser(form:NgForm){
   
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
    sessionStorage.setItem('justOnce',"false"); 
      this.router.navigate(['homeLink']);
      }
    })
  }

}
