import { Component, OnInit } from '@angular/core';
import { WalletAmount } from '../serviceclass/walletAmount';
import { addAmountToWallet } from '../serviceclass/addAmountToWallet';
import { DashboardService } from '../service/dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletAmount: WalletAmount = new WalletAmount();
  walletBalance: number;
  addAmountToWallet:addAmountToWallet=new addAmountToWallet();
  amount:number;
  message:string;

  constructor(private walletService: DashboardService,private router:Router) {
    if(!sessionStorage.getItem('customerId')){
      this.router.navigate(['loginCustomer']);
    }
  }

  //this.walletAmount.customerId=Number(sessionStorage.getItem('customerId'));   
  // (this.walletAmount.customerId);

  ngOnInit(): void {

    this.walletAmount.customerId = Number(sessionStorage.getItem('customerId'));
    this.walletService.showWalletBalance(this.walletAmount).subscribe(data => {
      this.walletBalance = data.amount;
    
    }
    )
  }


  public addBalance() {
    
    this.addAmountToWallet.customerId = Number(sessionStorage.getItem('customerId'));
    this.addAmountToWallet.walletAmount=this.amount;
    this.walletService.addBalance(this.addAmountToWallet).subscribe(data=>{
      this.walletBalance=data.amount;
      this.message=data.status;
    })

  }

}