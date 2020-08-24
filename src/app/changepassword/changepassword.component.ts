import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { ChangePassword } from '../serviceclass/changePassword';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  password:ChangePassword=new ChangePassword();
  message:string;

  constructor(private changePassword:DashboardService) { }

  changePasswordFunction(){
    this.password.customerId=Number(sessionStorage.getItem('customerId'));
    this.changePassword.changePassword(this.password).subscribe(data=>{
      if(data.status){
        this.message="Password updated sucessfully !";
      }
      else{
        this.message="Could not update password.";
      }
    })
  }

  ngOnInit(): void {
  }

}
