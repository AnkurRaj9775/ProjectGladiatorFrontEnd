import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
