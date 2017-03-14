import { Component, OnInit } from '@angular/core';
import { ShowEventService } from '../show-event.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from "../session.service";
import { UserService }from "../user.service";

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
error: string;
  eventId: string;
  event :Object;
  user: any;

  constructor(private eventService : ShowEventService,private session : SessionService , private userSession: UserService, private route : ActivatedRoute) { }

  ngOnInit() {

    this.session.isLoggedIn()
  .subscribe(
    (user) => this.successCb(user),
    (err)=> console.log("error: isLoggedIn failed")
  );

    this.route.params.subscribe((params)=>this.eventId = params['id']);
    //aqui le pasamos el objeto entry y ejecutamos la funcion getOneEntry
    this.event = this.getOneEvent();

    console.log("ususususususu", this.userSession.getUser())

  }
  getOneEvent(){
    return this.eventService.showEvent(this.eventId).subscribe((event)=>this.event=event);
  }

  errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      console.log(user._id)
      // console.log(user, this.user)
      this.error = null;
    }
}
