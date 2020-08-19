import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TACComponent } from './tac/tac.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CancelComponent } from './cancel/cancel.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ShowMyTicketComponent } from './show-my-ticket/show-my-ticket.component';
import { SharedComponent } from './shared/shared.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    AboutComponent,   
    TACComponent,
    LoginComponent,
    ForgotPassComponent,
    DashboardComponent,
    ContactUsComponent,
    CancelComponent,
    RescheduleComponent,
    ShowMyTicketComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
