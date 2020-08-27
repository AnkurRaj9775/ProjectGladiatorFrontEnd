import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Login } from "../serviceclass/login";
import { AdminloginService } from "../service/adminlogin.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-login-user',
  templateUrl: './admin-login-user.component.html',
  styleUrls: ['./admin-login-user.component.css']
})
export class AdminLoginUserComponent implements OnInit {

  loginad :Login=new Login();
  clientstatus:boolean=true;
  constructor(private service :AdminloginService,private router:Router) { }

  ngOnInit(): void {
  }


  loginAdmin(form:NgForm){
   
    this.service.adminlogin(this.loginad).subscribe(data =>{
  
      if(!data.resultStatus)
      {
        this.clientstatus=data.resultStatus;
      }
      else{
        this.clientstatus=data.resultStatus;

    sessionStorage.setItem('justOnce',"false"); 
      this.router.navigate(['loginAdmin']);
      }
    })
  }
}
