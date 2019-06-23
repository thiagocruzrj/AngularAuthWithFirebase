import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBYyEEUEHaJktin7dmX_vfk6I3EBHSCiN0",
    authDomain: "angularauth-ea3e4.firebaseapp.com",
    databaseURL: "https://angularauth-ea3e4.firebaseio.com",
    projectId: "angularauth-ea3e4",
    storageBucket: "",
    messagingSenderId: "840996497315",
    appId: "1:840996497315:web:c64cd71b01df4dc4"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
