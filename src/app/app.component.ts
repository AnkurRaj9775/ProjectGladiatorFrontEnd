import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjectGladiator';
loggedIn:boolean=true;
constructor(){
  console.log(sessionStorage.getItem('customerId'))
  if(sessionStorage.getItem('customerId')!=null)
  {
    this.loggedIn=false;
    console.log(this.loggedIn);
  }
}
clearSession(){
  sessionStorage.clear();
}





}
