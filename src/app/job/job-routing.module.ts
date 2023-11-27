import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "../guards/auth.guard";
import {JobDetailComponent} from "./job-detail/job-detail.component";
import {JobContentComponent} from "./job-content/job-content.component";

const routes: Routes = [
  {
    path: 'job-content',
    component: JobContentComponent,
    canActivate: [authGuard]
  },
  {
    path: 'job-detail/:id',
    component: JobDetailComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
