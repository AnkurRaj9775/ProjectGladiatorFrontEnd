import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../serviceclass/forgotpassword';
import { PasswordReset } from "../serviceclass/passwordReset";
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http:HttpClient) { }

  forgotPass(forgot :ForgotPassword):Observable<any>{
    return this.http.post("http://localhost:8080/forgotPassword",forgot);
  }

  resetPass(passwordreset :PasswordReset):Observable<any>{
    return this.http.post("http://localhost:8080/resetPassword",passwordreset);
  }
}
