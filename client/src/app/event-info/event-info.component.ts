import { Component, OnInit } from '@angular/core';
import {ShowEventService} from '../show-event.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  eventId: string;
  event :Object;

  constructor(private eventsService : ShowEventService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.eventId = params['id']);
    //aqui le pasamos el objeto entry y ejecutamos la funcion getOneEntry
    this.event = this.getOneEvent();


  }
  getOneEvent(){
    return this.eventsService.showEvent(this.eventId).subscribe((event)=>this.event=event);

  }

}
