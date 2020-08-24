import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from "../serviceclass/forgotpassword";
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  forgot :ForgotPassword=new ForgotPassword();
  constructor() { }

  ngOnInit(): void {
  }

  forgotPass()
  {

  }
}
