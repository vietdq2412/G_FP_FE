import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {adminGuard, authGuard, companyGuard} from "../guards/auth.guard";
import {JobDetailComponent} from "./job-detail/job-detail.component";
import {JobContentComponent} from "./job-content/job-content.component";
import {CompanyPageComponent} from "./company-page/company-page.component";

const routes: Routes = [
  {
    path: 'job-content',
    component: JobContentComponent,
    canActivate: [authGuard]
  },
  {
    path: 'job-detail',
    component: JobDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'manage-company',
    component: CompanyPageComponent,
    canActivate: [companyGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
