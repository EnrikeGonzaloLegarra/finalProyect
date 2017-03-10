import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.css']
})
export class InfoProfileComponent implements OnInit {
  user : Object[];
constructor(private sessionService : SessionService) { }

ngOnInit() {
  console.log("barra oe")
}

}
