import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {AuthGuardService} from '../services';
import { PageNotFoundComponent } from './page-not-found';
import { MainTabsetComponent } from './main-tabset';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainTabsetComponent,
    pathMatch: 'full'
  },
  //   {
  //     path: 'projects',
  //     loadChildren: 'app/project#ProjectModule',
  //     pathMatch: 'full',
  //     canActivate: [AuthGuardService]
  //   },
  //   {
  //     path: 'tasklists/:id',
  //     loadChildren: 'app/task#TaskModule',
  //     canActivate: [AuthGuardService]
  //   },
  //   {
  //     path: 'mycal/:view',
  //     loadChildren: 'app/my-calendar#MyCalendarModule',
  //     canActivate: [AuthGuardService]
  //   },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
