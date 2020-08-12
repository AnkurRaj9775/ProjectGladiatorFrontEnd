import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  password: string;
  registerUser(form: NgForm) {
    var mobile = (<HTMLInputElement>document.getElementById("userMobile"));
    var data = mobile.value;
    console.log(data);
    //console.log(mobile);

    var gold = (<HTMLInputElement>document.getElementById("Male"));
    var titanium = (<HTMLInputElement>document.getElementById("Female"));
    if (gold.checked)
      console.log(gold.value);
    else
      console.log(titanium.value);
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
    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
