import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import {CompanyLeftBarComponent} from "./company-left-bar/company-left-bar.component";
import { CompanyJobComponent } from './company-job/company-job.component';
import {AddJobFormComponent} from "./add-job-form/add-job-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EditJobFormComponent } from '../job/edit-job-form/edit-job-form.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyLeftBarComponent,
    CompanyJobComponent,
    AddJobFormComponent,
    EditJobFormComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class CompanyModule { }
