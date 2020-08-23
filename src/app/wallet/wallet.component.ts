import { Component, OnInit } from '@angular/core';
import { WalletAmount } from '../serviceclass/walletamount';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  wallet : WalletAmount=new WalletAmount;
  constructor(){}

  //walletCustId.custId=sessionStorage.getItem('customerId');

 walletCustId=sessionStorage.getItem('customerId');
 console.log();
 

}
