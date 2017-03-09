import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { UserService } from "../user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

user :Object;

  constructor(private sessionService : SessionService) { }

  ngOnInit() {

  }

}
