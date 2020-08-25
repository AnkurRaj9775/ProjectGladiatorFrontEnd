import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  //status:boolean;

  makeEditable(){

    var contenteditable = document.getElementById('editable').contentEditable;
 
    if(contenteditable == 'inherit' || contenteditable == 'false'){
       document.getElementById('editable').contentEditable = 'true';
    }else{
     document.getElementById('txt1').contentEditable = 'false';
    }
    
  }

  constructor(private router:Router) {
    if(!sessionStorage.getItem('customerId')){
      this.router.navigate(['loginCustomer']);
    }
   }

  ngOnInit(): void {
    if (!sessionStorage.justOnce){
      sessionStorage.setItem('justOnce',"true");  
    window.location.reload();
    }

  }

}
