import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRoutingModule } from './job-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobComponent } from './job.component';
import { JobContentComponent } from './job-content/job-content.component';
import {AppRoutingModule} from "../app-routing.module";
import {LayoutModule} from "../layout/layout.module";
import { CompanyPageComponent } from './company-page/company-page.component';


@NgModule({
  declarations: [
    JobDetailComponent,
    JobComponent,
    JobContentComponent,
    CompanyPageComponent,

  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    LayoutModule,
  ]
})
export class JobModule { }
