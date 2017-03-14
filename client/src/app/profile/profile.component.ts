import {  Component, OnInit,Input,Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserService} from '../user.service';
import {SessionService} from '../session.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SessionService]
})
export class ProfileComponent implements OnInit {
  userId: any;
  error: string;
    //declaramos un objeto entry
  user : any;
// , private route : ActivatedRoute
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
  .subscribe(
    (user) => this.successCb(user),
  );
}

logout() {
  this.session.logout()
    .subscribe(
    () => this.successCb(null),
    (err) => this.errorCb(err)
    );
    this.router.navigate(['/']);
}

  logUser(){
    console.log("logUser",this.user)
  }
  errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      // console.log(user, this.user)
      this.error = null;
    }

}
