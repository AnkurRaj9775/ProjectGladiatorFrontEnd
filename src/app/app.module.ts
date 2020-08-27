import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
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
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CancelComponent } from './cancel/cancel.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ShowMyTicketComponent } from './show-my-ticket/show-my-ticket.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SharedComponent } from './shared/shared.component';
import { SearchComponentComponent } from './searchBus/searchBus.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { WalletComponent } from './wallet/wallet.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SeatmapComponent } from './seatmap/seatmap.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { FrequentlytravelledroutesComponent } from './frequentlytravelledroutes/frequentlytravelledroutes.component';
import { LastmonthrecordsandprofitComponent } from './lastmonthrecordsandprofit/lastmonthrecordsandprofit.component';
import { MostpreferredtypeofbusesComponent } from './mostpreferredtypeofbuses/mostpreferredtypeofbuses.component';
import { RegisteredcustomerbutnoreservationComponent } from './registeredcustomerbutnoreservation/registeredcustomerbutnoreservation.component';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { BookbuswithoutdriverComponent } from './bookbuswithoutdriver/bookbuswithoutdriver.component';
import { AdminLoginUserComponent } from './admin-login-user/admin-login-user.component';
import { RemoveBusComponent } from './remove-bus/remove-bus.component';





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
    SharedComponent,
    SearchComponentComponent,
    MyprofileComponent,
    SharedComponent,
    MybookingsComponent,
    ChangepasswordComponent,
    WalletComponent,
    SeatmapComponent,
    BookticketComponent,
    AdmindashboardComponent,
    SeatmapComponent,
    FrequentlytravelledroutesComponent,
    LastmonthrecordsandprofitComponent,
    MostpreferredtypeofbusesComponent,
    RegisteredcustomerbutnoreservationComponent,
    ReservationdetailsComponent,
    PaymentComponent,
    BookbuswithoutdriverComponent,
    AdminLoginUserComponent,
    RemoveBusComponent
   
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
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
