import { Component, OnInit } from '@angular/core';
import {ShowEventService} from '../show-event.service';
import {SessionService} from '../session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
  providers: [ShowEventService]
})
export class ListEventComponent implements OnInit {

  events : Object[];
  constructor(private eventSession: ShowEventService, private router: Router ) { }

  ngOnInit() {
    this.listEvent();
    this.map();
  }
  listEvent(){
    this.eventSession.showEvents().subscribe((events)=>this.events=events);
  }
  
  map(){
    this.eventSession.printMap().subscribe((res)=>(
      console.log(res)
    ));
  }


}
