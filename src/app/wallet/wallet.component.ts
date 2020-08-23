import { Component, OnInit } from '@angular/core';
import { WalletAmount } from "../serviceclass/walletAmount";
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  walletamount :WalletAmount=new WalletAmount();
  
  constructor() { }

  ngOnInit(): void {
  this.walletamount.custometId=Number(sessionStorage.getItem('customerId'));
  
  console.log(this.walletamount.custometId);
  }

}
