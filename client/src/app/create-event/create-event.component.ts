import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowEventService } from '../show-event.service';
import { SessionService } from "../session.service";
import { FileSelectDirective,FileUploader } from "ng2-file-upload";


const BASEURL ="http://localhost:3000";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [SessionService]
})
export class CreateEventComponent implements OnInit {

  constructor(private eventSession: ShowEventService,private session: SessionService, private router: Router) { }



  event: any;
  formEvent = {
    eventName: '',
    town: '',
    club:'',
    eventDate:'',
    inscribedFinalDate: '',
    eventWeb:'',
    userId:'',
    gpxFile:''
  };

  error: string;
  privateData: any = '';
  user:any;
  feedback:any;



  ngOnInit() {

      this.session.isLoggedIn()
    .subscribe(
      (user) => this.successUserCb(user))

  //     this.uploader.onSuccessItem = (item, response) => {
  //         this.feedback = JSON.parse(response).message;
  //       };
  //
  //       this.uploader.onErrorItem = (item, response, status, headers) => {
  //         this.feedback = JSON.parse(response).message;
  //       };
  }

saveEvent(){
  // console.log("uyrtfbuttrucuytdhtfh7f8htf8tf",this.formEvent);
  //console.log("uploader",this.uploader);
  this.formEvent.userId=this.user._id;

  this.eventSession.saveOneEvent(this.formEvent)
    .subscribe((event) => this.successCb(this.formEvent), (err) => this.errorCb(err));

    //this.uploader.uploadAll();
    this.router.navigate(['/home/upload-file'],);
}
  cancel(){
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
