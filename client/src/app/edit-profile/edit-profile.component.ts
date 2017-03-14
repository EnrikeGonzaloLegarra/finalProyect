import {  Component, OnInit,Input,Output } from '@angular/core';
import {SessionService} from '../session.service';
import {ActivatedRoute} from '@angular/router';
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
    email: ''
  };
// , private route : ActivatedRoute
  constructor(private session: SessionService, private userService: UserService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.session.isLoggedIn()
  .subscribe(
    (user) => this.successCb(user),
  );
  //this.route.params.subscribe((params)=>this.userId = params['id']);
  //aqui le pasamos el objeto entry y ejecutamos la funcion getOneEntry
  //this.user = this.saveUser();
  }

  saveUser(){
    console.log("userID",this.editInfo)
    return this.userService.saveUserEdit(this.user._id,this.editInfo).subscribe((user)=>this.user=user);

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
