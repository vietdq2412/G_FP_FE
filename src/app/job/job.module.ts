import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobRoutingModule} from './job-routing.module';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {JobComponent} from './job.component';
import {JobContentComponent} from './job-content/job-content.component';
import {LayoutModule} from "../layout/layout.module";
import {LeftBarJobComponent} from "./left-bar-job/left-bar-job.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ApplyCVFormComponent } from './job-detail/apply-cv-form/apply-cv-form.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    JobDetailComponent,
    JobComponent,
    JobContentComponent,
    LeftBarJobComponent,
    ApplyCVFormComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    LayoutModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class JobModule { }
