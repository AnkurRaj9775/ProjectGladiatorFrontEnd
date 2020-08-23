import { Component, OnInit } from '@angular/core';
import { CancelTicket } from "../serviceclass/cancelticket";
import { CancelticketService } from "../service/cancelticket.service";
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  ct : CancelTicket=new CancelTicket();
  constructor(private cts:CancelticketService) { }

  cancelTicketStatus:string;
  ngOnInit(): void {
  }

  cancelTicket()
  {
    this.cts.cancelTicket(this.ct).subscribe(data =>{
     this.cancelTicketStatus=data.status;
    })
  }
}
