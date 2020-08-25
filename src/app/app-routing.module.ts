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
import{ ShowMyTicketComponent} from './show-my-ticket/show-my-ticket.component';
import { SeatmapComponent } from "./seatmap/seatmap.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
