import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ProcessesComponent} from './view/processes/processes.component';
import {LoginComponent} from './view/login/login.component';
import {UserComponent} from './view/user/user.component';
import {RequestComponent} from './view/request/request.component';
import {DeliverAgentsComponent} from './view/deliver-agents/deliver-agents.component';
import {NavigationComponent} from './view/navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    component: NavigationComponent,
    path: 'home', children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'request',
        component: RequestComponent,
      },
      {
        component: DashboardComponent,
        path: 'dashboard',
      },
      {
        component: ProcessesComponent,
        path: 'processes'
      },
      {
        component: DeliverAgentsComponent,
        path: 'deliver-agent'
      }
    ]
  }
  // ,
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
