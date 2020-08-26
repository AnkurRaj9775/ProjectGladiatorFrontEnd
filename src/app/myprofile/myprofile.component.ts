import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../serviceclass/Profile';
import { ViewProfileCard } from '../serviceclass/ViewProfileCard';
import { DashboardService } from '../service/dashboard.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  profile:Profile=new Profile();
  viewProfile:ViewProfileCard=new ViewProfileCard();
  name:string;
	dateOfBirth:string;
	gender:string;
	email:string;
	contact:string;
  //status:boolean;

  // makeEditable(){

  //   var contenteditable = document.getElementById('editable').contentEditable;
 
  //   if(contenteditable == 'inherit' || contenteditable == 'false'){
  //      document.getElementById('editable').contentEditable = 'true';
  //   }else{
  //    document.getElementById('txt1').contentEditable = 'false';
  //   }
    
  // }

  constructor(private profileService:DashboardService,private router:Router) {
    if(!sessionStorage.getItem('customerId')){
      this.router.navigate(['loginCustomer']);
    }
   }

  ngOnInit(): void {
    this.profile.customerId=Number(sessionStorage.getItem('customerId'));
    this.profileService.viewProfile(this.profile).subscribe(data=>{
      
      this.viewProfile.name=data.name;
      this.viewProfile.age=data.age;
      this.viewProfile.gender=data.gender;
      this.viewProfile.email=data.email;
      this.viewProfile.contact=data.contact;
    })
  }

}
