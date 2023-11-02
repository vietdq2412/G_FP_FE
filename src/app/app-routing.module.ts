import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./authen/login/login.component";
import {RegisterComponent} from "./authen/register/register.component";
import {authGuard} from "./guards/auth.guard";
import {JobComponent} from "./job/job.component";

const routes: Routes = [
  {
    path: 'login-page', component: LoginComponent
  },
  {
    path: 'register-page', component: RegisterComponent
  },

  {
    path: 'job',
    loadChildren: () => import('./job/job.module').then(m => m.JobModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then(m => m.SocialModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
