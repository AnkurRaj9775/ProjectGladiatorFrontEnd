import { Injectable } from '@angular/core';
import { WalletComponent } from '../wallet/wallet.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletAmount } from '../serviceclass/walletAmount';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  showWalletBalance(walletAmount:WalletAmount):Observable<any>{
    return this.http.post("http://localhost:8080/walletBalance",walletAmount);
  }
}
