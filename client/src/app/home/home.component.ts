import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user : Object[];
    error: any
  constructor(private session : SessionService) { }

  ngOnInit() {
    // this.session.isLoggedIn()
    //     .subscribe(
    //       (user) => this.successCb(user)
    //     );
    // console.log("user",this.user);
  }
  //
  // errorCb(err) {
  //     this.error = err;
  //     this.user = null;
  //   }
  //
  //   successCb(user) {
  //     this.user = user;
  //     this.error = null;
  //   }
  //
  //
  // getUser(){
  //   this.session.isLoggedIn().subscribe((user)=>this.user=user);
  // }

}
