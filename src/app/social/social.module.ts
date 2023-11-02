import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SocialComponent } from './social.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProfilePageComponent,
    ChatBoxComponent,
    SocialComponent
  ],
  imports: [
    SocialRoutingModule
  ]
})
export class SocialModule { }
