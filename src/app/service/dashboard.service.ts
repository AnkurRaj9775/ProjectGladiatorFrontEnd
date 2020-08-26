import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletAmount } from '../serviceclass/walletAmount';
import { addAmountToWallet } from '../serviceclass/addAmountToWallet';
import { ChangePassword } from '../serviceclass/changePassword';
import { Profile } from '../serviceclass/Profile';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  viewProfile(profile:Profile):Observable<any>{
    return this.http.post("http://localhost:8181/viewProfile",profile);
  }

  showWalletBalance(walletAmount:WalletAmount):Observable<any>{
    return this.http.post("http://localhost:8181/walletBalance",walletAmount);
  }
  
  addBalance(addAmountToWallet:addAmountToWallet):Observable<any>{
    return this.http.post("http://localhost:8181/addBalance",addAmountToWallet);
  }

  changePassword(changePassword:ChangePassword):Observable<any>{
    return this.http.post("http://localhost:8181/changePassword",changePassword);
  }
}
