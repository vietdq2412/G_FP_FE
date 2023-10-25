import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobPageComponent } from './job-page/job-page.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobComponent } from './job.component';


@NgModule({
  declarations: [
    JobPageComponent,
    JobDetailComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
