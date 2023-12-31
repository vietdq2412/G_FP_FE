import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenModule} from "./authen/authen.module";
import {TokenInterceptor} from "./token-interceptor";
import {ProfileCompanyComponent} from './profile-company/profile-company.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environment";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {SnackBarComponent} from './snack-bar/snack-bar.component';
import {EditProfileUserComponent} from './profile-user/edit-profile-user/edit-profile-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AddSkillComponent } from './profile-user/add-skill/add-skill.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileCompanyComponent,
        ProfileUserComponent,
        SnackBarComponent,
        EditProfileUserComponent,
        AddSkillComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        AuthenModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatProgressBarModule,
        FormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
