import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {companyGuard} from "../guards/auth.guard";
import {CompanyComponent} from "./company.component";
import {AddJobFormComponent} from "./add-job-form/add-job-form.component";
import {CompanyJobComponent} from "./company-job/company-job.component";

const routes: Routes = [
  {
    path: 'add-job',
    component: AddJobFormComponent,
    canActivate: [companyGuard]
  },
  {
    path: 'jobs',
    component: CompanyJobComponent,
    canActivate: [companyGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
