import { Component, OnInit } from '@angular/core';
import { Admin } from "../serviceclass/Admin";
import { AdminServiceService } from "../service/admin-service.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  admin: Admin =new Admin();
  loginStatus:boolean=true;
  constructor(private adminService: AdminServiceService, private router:Router) { }

  loginUser(form:NgForm){
   
    this.adminService.login(this.admin).subscribe(data =>{
  
      if(!data.resultStatus)
      {
        this.loginStatus=data.resultStatus;
      }
      else{
        this.loginStatus=data.resultStatus;
        let adminId=data.adminId;
         let adminName=data.name;

      sessionStorage.setItem('adminId',adminId);
      sessionStorage.setItem('adminName',adminName); 
      sessionStorage.setItem('justOnce',"false"); 
      this.router.navigate(['adminDashboard']);
      }
    })
  }
   

  ngOnInit(): void {
  }

}
