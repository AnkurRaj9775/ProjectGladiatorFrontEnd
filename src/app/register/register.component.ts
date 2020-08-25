import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Customer  } from "../serviceclass/Customer";
import { RegisterService } from "../service/register.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg: string;
  password: string;

  customer: Customer=new Customer();
  registerStatus:boolean;
constructor(private registerService:RegisterService,private router:Router){}




  registerUser(form:NgForm) {
   this.registerService.register(this.customer).subscribe(data=>{

    if(!data.resultStatus)
      {
        this.registerStatus=data.resultStatus;
      }
      else{
        this.registerStatus=data.resultStatus;
      }

   })
  }
  

  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  manageMobile(id) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
      mobile.value = data;
    else
      mobile.value = data.substring(0, 5) + " " + data.substring(5, data.length);
  }
  confirmPassword(): boolean {
    var p = (<HTMLInputElement>document.getElementById("confirmPassword"));
    var pass = p.value;
    if (this.password === pass)
      return true;

   this.errorMsg="Please Enter the same password";
    return false;
  }

  

  ngOnInit(): void {
  }

}
