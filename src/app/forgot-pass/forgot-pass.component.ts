import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from "../serviceclass/forgotpassword";
import { ResetPasswordService } from "../service/reset-password.service";
import { PasswordReset } from "../serviceclass/passwordReset";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  forgot :ForgotPassword=new ForgotPassword();
  resetpass :PasswordReset=new PasswordReset();
  constructor(private resetPassword: ResetPasswordService,private router:Router) { }

  clientstatus:boolean=false;
  status:boolean=false;
  errorstatus:boolean=true;
  errorMsg: string;
  confirmstatus:boolean=true;
  confirmPass="";
  ngOnInit(): void {
  }

  isNumber(event, id, l) {
    var customerId = (<HTMLInputElement>document.getElementById(id));
    var data = customerId.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }

 
  confirmPassword(): boolean {
    if (this.resetpass.password == this.confirmPass){
      this.confirmstatus=true;
      return true;      
    }
    return false;
    this.confirmstatus=false;
  }

  forgotPass()
  {
    this.resetPassword.forgotPass(this.forgot).subscribe(data =>{ 
      if(!data.resultStatus)
      {
        this.errorstatus=data.resultStatus;
        this.clientstatus=data.resultStatus;
      }
      else{
        this.clientstatus=data.resultStatus;
        let customerId=data.customerId;
        sessionStorage.setItem('customerId',customerId);
    
      }

    })
  }
  
  resetPass(form:NgForm){
    this.resetpass.customerId=Number(sessionStorage.getItem("customerId"));
    this.resetPassword.resetPass(this.resetpass).subscribe(data=>{
      if(!data.resultStatus)
      {
      
        this.status=data.resultStatus;
      }
      else{
        this.status=data.resultStatus;
      }
    })
  }

  cancel()
  {
    sessionStorage.removeItem('customerId');
    this.clientstatus=false;

  }


}
