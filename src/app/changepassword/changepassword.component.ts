import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { ChangePassword } from '../serviceclass/changePassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  password:ChangePassword=new ChangePassword();
  message:string;
  confirmPass="";
  constructor(private changePassword:DashboardService,private router:Router) { 
    if(sessionStorage.getItem('customerId')==null){
      this.router.navigate(['loginCustomer']);
    }
  }

  changePasswordFunction(){
    console.log(this.password)
    this.password.customerId=Number(sessionStorage.getItem('customerId'));
    this.changePassword.changePassword(this.password).subscribe(data=>{
     this.message=data.status;
    })
  }

  ngOnInit(): void {
  }


  confirmPassword(): boolean {
    if (this.password.newPassword == this.confirmPass){
     
      return true;      
    }
    return false;
  
  }
}
