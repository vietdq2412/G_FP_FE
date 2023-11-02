import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { LeftBarJobComponent } from './left-bar-job/left-bar-job.component';
import { CompanyLeftBarComponent } from './company-left-bar/company-left-bar.component';


@NgModule({
    declarations: [
        TopbarComponent,
        RightSideBarComponent,
        LeftBarJobComponent,
        CompanyLeftBarComponent
    ],
  exports: [
    TopbarComponent,
    LeftBarJobComponent,
    CompanyLeftBarComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }
