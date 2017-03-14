import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private session: SessionService) { }

  ngOnInit() {
   /*this.session.isLoggedIn()
  .subscribe(
    (user) => this.successCb(user)
    );

    this.session.getLoginEventEmitter()
        .suscribe((user)=>this.user=user);
        */
  }

  /*errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      // console.log(user, this.user)
      this.error = null;
    }
    */

}
