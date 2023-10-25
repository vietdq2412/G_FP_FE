import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./authen/login/login.component";
import {RegisterComponent} from "./authen/register/register.component";
import {JobPageComponent} from "./job/job-page/job-page.component";
import {authGuard} from "./guards/auth.guard";
import {JobComponent} from "./job/job.component";

const routes: Routes = [
  {path: 'login-page', component: LoginComponent},
  {path: 'register-page', component: RegisterComponent},
  {
    path: 'job-page',
    component: JobComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
