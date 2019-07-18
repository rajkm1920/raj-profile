import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Profilev2Component } from './profilev2/profilev2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    Profilev2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class AppModule { }
