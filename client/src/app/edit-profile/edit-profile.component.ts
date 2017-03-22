import { Component, OnInit,Input,Output } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { UserService } from "../user.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [SessionService]
})
export class EditProfileComponent implements OnInit {
  userId: any;
  error: string;
  user : any;
  editInfo = {
    name: '',
    lastName:'',
    email: '',
    town:'',
    age:'',
    club:'',
    date:''
  };
// , private route : ActivatedRoute
  constructor(private session: SessionService, private userService: UserService, private router : Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
  .subscribe(
    (user) => this.successCb(user),
  );
  }

  saveUser(){

    return this.userService.saveUserEdit(this.user._id,this.editInfo).subscribe((user)=>this.user=user);

  }

  errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
        this.router.navigate(['/home/dashboard']);
      this.user = user;
      this.error = null;
    }


}
