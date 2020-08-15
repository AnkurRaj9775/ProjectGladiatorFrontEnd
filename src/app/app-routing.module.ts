import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { AboutComponent } from './about/about.component';
import { TACComponent } from './tac/tac.component'
import { DashboardComponent  } from './dashboard/dashboard.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
