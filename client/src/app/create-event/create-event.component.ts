import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowEventService } from '../show-event.service';
import { SessionService } from "../session.service";
import { FileSelectDirective, FileUploader } from "ng2-file-upload";


const BASEURL = "http://localhost:3000";

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css'],
    providers: [SessionService]
})
export class CreateEventComponent implements OnInit {
    uploader = new FileUploader({
        url: "http://localhost:3000/apifile/create"
    });
    event: any;
    formEvent = {
        eventName: '',
        town: '',
        club: '',
        eventDate: '',
        inscribedFinalDate: '',
        eventWeb: '',
        userId: '',
        gpxFile: ''
    };
    error: string;
    privateData: any = '';
    user: any;
    feedback: any;

    constructor(private eventSession: ShowEventService, private session: SessionService, private router: Router) { }

    ngOnInit() {
        this.session.isLoggedIn()
            .subscribe(
            (user) => this.successUserCb(user))
    }

    saveEvent() {
        this.uploader.onBuildItemForm = (item, form) => {
            form.append('eventName', this.formEvent.eventName);
            form.append('town', this.formEvent.town);
            form.append('club', this.formEvent.club);
            form.append('eventDate', this.formEvent.eventDate);
            form.append('inscribedFinalDate', this.formEvent.inscribedFinalDate);
            form.append('eventWeb',this.formEvent.eventWeb);
        };

        this.uploader.uploadAll();
        this.router.navigate(['/home']);

    }
    cancel() {
        this.router.navigate(['/home']);
    }

    errorCb(err) {
        this.error = err;
        this.event = null;
    }

    successUserCb(user) {

        this.user = user;
        this.error = null;
    }
    successCb(event) {

        this.event = event;
        this.error = null;
    }

}
