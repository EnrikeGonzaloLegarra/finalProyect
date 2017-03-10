import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./session.service";
import { UserService } from "./user.service";
import { AppComponent } from './app.component';
import { LoginSingInComponent } from './login-sing-in/login-sing-in.component';
import { RouterModule, Routes  } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoProfileComponent } from './info-profile/info-profile.component';
import { ListEventComponent } from './list-event/list-event.component';
import { SignInComponent } from './sign-in/sign-in.component';

//Aqui realizamos las rutas virtuales
const routes: Routes = [
  { path: '',  component: SinglePageComponent},
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'home',  component: ProfileComponent},
  { path: 'login',  component: LoginSingInComponent},
  { path: 'signup', component: SignInComponent},
  { path: 'edit-profile', component: ProfileComponent},
  { path: 'list-event', component: ListEventComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginSingInComponent,
    HeaderComponent,
    SinglePageComponent,
    HomeComponent,
    ProfileComponent,
    InfoProfileComponent,
    ListEventComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
