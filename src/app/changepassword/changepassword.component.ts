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

  constructor(private changePassword:DashboardService,private router:Router) { 
    if(sessionStorage.getItem('customerId')==null){
      this.router.navigate(['loginCustomer']);
    }
  }

  // myFunction() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  changePasswordFunction(){
    this.password.customerId=Number(sessionStorage.getItem('customerId'));
    this.changePassword.changePassword(this.password).subscribe(data=>{
     this.message=data.status;
    })
  }

  ngOnInit(): void {
  }

}
