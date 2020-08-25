import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ProjectGladiator';
loggedIn:boolean=false;

constructor(){
  this.ngOnInit();
  
}
  
  
clearSession(){
  sessionStorage.clear();
  location.reload();
}

ngOnInit(): void {
  console.log(sessionStorage.getItem('customerId'))
  if(sessionStorage.getItem('customerId')===null)
  {
    this.loggedIn=true;
    console.log(this.loggedIn);
  }
 
}

}