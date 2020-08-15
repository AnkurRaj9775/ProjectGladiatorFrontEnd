import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';

import { TACComponent } from './tac/tac.component'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    AboutComponent,
   
    TACComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
