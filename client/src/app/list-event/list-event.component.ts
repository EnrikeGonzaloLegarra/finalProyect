import { Component, OnInit } from '@angular/core';
import {ShowEventService} from '../show-event.service';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
  providers: [ShowEventService]
})
export class ListEventComponent implements OnInit {

  events : Object[];
  constructor(private eventSession: ShowEventService ) { }

  ngOnInit() {
    this.listEvent();
  }
  listEvent(){
    this.eventSession.showEvents().subscribe((events)=>this.events=events);
  }

}
