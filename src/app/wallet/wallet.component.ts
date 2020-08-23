import { Component, OnInit } from '@angular/core';
import { WalletAmount } from '../serviceclass/walletAmount';
import { DashboardService } from '../service/dashboard.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletAmount: WalletAmount = new WalletAmount();
  walletBalance:number;

  constructor(private walletService: DashboardService, private router: Router) { }

  //this.walletAmount.customerId=Number(sessionStorage.getItem('customerId'));   
  //console.log(this.walletAmount.customerId);

  ngOnInit(): void {

    this.walletAmount.customerId=Number(sessionStorage.getItem('customerId'));
    this.walletService.showWalletBalance(this.walletAmount).subscribe(data => {
      this.walletBalance=data.walletAmount;

    }
    )
  }

  addBalanceInWallet(){
    
  }
}
