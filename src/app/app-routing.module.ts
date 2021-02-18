import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {DeliverAgentComponent} from './view/deliver-agent/deliver-agent.component';
import {LoginComponent} from './view/login/login.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/dashboard'
  // },
  {
    component: DashboardComponent,
      path: 'dashboard',
  },
  {
    component: DeliverAgentComponent,
    path: 'deliver-agent'
  },
  /*  {
      path: '**',
      component: NotFoundComponent
    }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
