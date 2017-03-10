import {  Component, OnInit,Input,Output } from '@angular/core';
import {UserService} from '../user.service';
import {SessionService} from '../session.service';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
  .subscribe(
    (user) => this.successCb(user),
  
  );
}
  //   this.session.isLoggedIn()
  //       .subscribe(
  //         (user) => {
  //         console.log("anthony",user);
  //       }),
  //       (err) => console.log("error: ", err);
  // }
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
  getUserProfile(){
    //   console.log(this.user);
    // //aqui ejecutamos la function con el `obejto` journalService
    //   return this.session.getUser(this.user).subscribe((user)=>this.user=user);
    }
}
