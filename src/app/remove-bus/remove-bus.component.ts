import { Component, OnInit } from '@angular/core';
import { ActivateRemoveService } from "../service/activate-remove.service";
import { ActivateRemove } from "../serviceclass/ActivateRemove";
@Component({
  selector: 'app-remove-bus',
  templateUrl: './remove-bus.component.html',
  styleUrls: ['./remove-bus.component.css']
})
export class RemoveBusComponent implements OnInit {

  activate:ActivateRemove=new ActivateRemove();
  removebus:ActivateRemove=new ActivateRemove();

  constructor(private service:ActivateRemoveService) { }
  buses:any;
  ngOnInit(): void {
    this.service.showbus().subscribe(data=>{
      this.buses=data.busdetails;
      console.log(data);
      console.log(this.buses);
    })
  }

  remove(busId){
    this.removebus.busId=busId;
    this.service.removeBus(this.removebus).subscribe(data=>
      {
        if(data.resultStatus)
        {
          window.location.reload();
        }
      })
  }

  add(busId){
    this.activate.busId=busId;
    this.service.activateBus(this.activate).subscribe(data=>{
      if(data.resultStatus)
        {
          window.location.reload();
        }
    })
  }
}
