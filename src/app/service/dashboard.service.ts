import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletAmount } from '../serviceclass/walletAmount';
import { addAmountToWallet } from '../serviceclass/addAmountToWallet';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  showWalletBalance(walletAmount:WalletAmount):Observable<any>{
    return this.http.post("http://localhost:8080/walletBalance",walletAmount);
  }
  
  addBalance(addAmountToWallet:addAmountToWallet):Observable<any>{
    return this.http.post("http://localhost:8080/addBalance",addAmountToWallet);
  }
}
