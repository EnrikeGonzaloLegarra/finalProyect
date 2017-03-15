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
import { ShowEventService } from './show-event.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { FileSelectDirective } from "ng2-file-upload";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadGpxfileComponent } from './upload-gpxfile/upload-gpxfile.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { GoogleChartComponent } from './google-chart/google-chart.component';

//Aqui realizamos las rutas virtuales
const routes: Routes = [
  { path: '',  component: SinglePageComponent},
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'login',  component: LoginSingInComponent},
  { path: 'signup', component: SignInComponent},
  { path: 'event-info/:id', component : EventInfoComponent},
  { path: 'home',  component: ProfileComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'edit-profile', component: EditProfileComponent},
          { path: 'list-events', component: ListEventComponent},
          { path: 'event-info/:id', component : EventInfoComponent},
          { path: 'upload-file', component : UploadGpxfileComponent},
          { path: 'create-event', component : CreateEventComponent}
        ]}
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
    SignInComponent,
    EditProfileComponent,
    CreateEventComponent,
    EventInfoComponent,
    FileSelectDirective,
    DashboardComponent,
    UploadGpxfileComponent,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAN9OdByHcEHDc-fwHvjNsvh6XKKDvrciY'})
  ],
  providers: [SessionService, ShowEventService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
