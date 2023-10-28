import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';


@NgModule({
    declarations: [
        TopbarComponent,
        RightSideBarComponent,
        LeftSideBarComponent
    ],
    exports: [
        TopbarComponent,
        LeftSideBarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }
