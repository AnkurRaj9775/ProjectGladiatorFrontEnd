import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { AboutComponent } from './about/about.component';
import { TACComponent } from './tac/tac.component'
import { DashboardComponent  } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component' ;
import { LoginComponent } from "./login/login.component";
import { ForgotPassComponent  } from "./forgot-pass/forgot-pass.component";
import { RegisterComponent } from "./register/register.component";
import { CancelComponent } from "./cancel/cancel.component";
import { RescheduleComponent } from "./reschedule/reschedule.component";
import { SearchComponentComponent } from "./searchBus/searchBus.component";
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { WalletComponent } from './wallet/wallet.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ShowMyTicketComponent} from './show-my-ticket/show-my-ticket.component';
import { SeatmapComponent } from "./seatmap/seatmap.component";
import { BookticketComponent } from './bookticket/bookticket.component';
import { FrequentlytravelledroutesComponent } from './frequentlytravelledroutes/frequentlytravelledroutes.component';
import { LastmonthrecordsandprofitComponent } from './lastmonthrecordsandprofit/lastmonthrecordsandprofit.component';
import { MostpreferredtypeofbusesComponent } from './mostpreferredtypeofbuses/mostpreferredtypeofbuses.component';
import { RegisteredcustomerbutnoreservationComponent } from './registeredcustomerbutnoreservation/registeredcustomerbutnoreservation.component';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { BookbuswithoutdriverComponent } from './bookbuswithoutdriver/bookbuswithoutdriver.component';

const routes: Routes = [
  {
     path:'',component:HomepageComponent
  },
  {
    path:'homeLink',component:HomepageComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'terms',component:TACComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'contact',component:ContactUsComponent
  },
  {
    path:'loginCustomer',component:LoginComponent
  },
  {
    path:'forgetLink',component:ForgotPassComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'reschedule', component:RescheduleComponent
  },
  {
    path:'cancellation',component:CancelComponent
  },
  {
    path:'searchBus', component: SearchComponentComponent
    
  },
  {
    path:'mybookings',component:MybookingsComponent
  },
  {
    path:'changepassword',component:ChangepasswordComponent
  },
  {
    path:'wallet',component:WalletComponent
  },
  {
    path:'myprofile',component:MyprofileComponent
  },
  {
    path:'showMyTicket',component:ShowMyTicketComponent
  },
  {
    path:'loginAdmin',component:AdmindashboardComponent
  },
  {
    path:'seatMap',component:SeatmapComponent
  },
  {
    path:'frequentlytravelledroutes',component:FrequentlytravelledroutesComponent
  },
  {
    path:'lastmonthrecordsandprofit',component:LastmonthrecordsandprofitComponent
  },
  {
    path:'mostpreferredtypeofbuses',component:MostpreferredtypeofbusesComponent
  },
  {
    path:'registeredcustomerbutnoreservation',component:RegisteredcustomerbutnoreservationComponent
  },
  {
    path:'reservationdetails',component:ReservationdetailsComponent
  }
  ,
  {
    path:'bookTicket',component:BookticketComponent
  }
  ,
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'bookbuswithoutdriver',component:BookbuswithoutdriverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
