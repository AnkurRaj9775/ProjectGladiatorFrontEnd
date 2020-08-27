import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ProjectGladiator';
loggedIn:boolean=false;
adminLoggedIn:boolean=false;
constructor(){
  this.ngOnInit();
  
}
  
  
clearSession(){
  sessionStorage.clear();
  location.reload();
}

ngOnInit(): void {
   
  if(sessionStorage.getItem('customerId')===null)
  {
    this.loggedIn=true;
     
  }
  if(sessionStorage.getItem('boolean')!==null){
    this.adminLoggedIn=true;
  }
 
}

}