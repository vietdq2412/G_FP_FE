import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
    declarations: [
        TopbarComponent,
    ],
  exports: [
    TopbarComponent,
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }
