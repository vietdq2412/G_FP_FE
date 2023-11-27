import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./authen/login/login.component";
import {RegisterComponent} from "./authen/register/register.component";
import {authGuard} from "./guards/auth.guard";
import {JobComponent} from "./job/job.component";
import {SocialComponent} from "./social/social.component";
import {CompanyComponent} from "./company/company.component";
import {ProfileCompanyComponent} from "./profile-company/profile-company.component";
import {ProfileUserComponent} from "./profile-user/profile-user.component";

const routes: Routes = [
  {
    path: 'login-page', component: LoginComponent
  },
  {
    path: 'register-page', component: RegisterComponent
  },
  {
    path: 'company-profile', component: ProfileCompanyComponent
  },
  {
    path: 'user-profile', component: ProfileUserComponent
  },

  {
    path: 'job',
    component: JobComponent,
    loadChildren: () => import('./job/job.module').then(m => m.JobModule)
  },
  {
    path: 'social',
    component: SocialComponent,
    loadChildren: () => import('./social/social.module').then(m => m.SocialModule)
  },
  {
    path: 'company',
    component: CompanyComponent,
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
