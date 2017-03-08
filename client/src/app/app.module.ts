import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./session.service";


import { AppComponent } from './app.component';
import { LoginSingInComponent } from './login-sing-in/login-sing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSingInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
