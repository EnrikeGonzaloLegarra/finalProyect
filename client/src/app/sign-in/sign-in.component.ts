import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: any;
  formInfo = {
    name: '',
    password: '',
    check:''
  };
  error: string;
  privateData: any = '';


  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
      (user) => this.successCb(user),
    );
  }

  signup() {
    console.log(this.formInfo);
    this.session.signup(this.formInfo)
      .subscribe((user) => this.successCb(user),(err) => this.errorCb(err));
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.router.navigate(['/home']);
    this.user = user;
    this.error = null;
  }

}
