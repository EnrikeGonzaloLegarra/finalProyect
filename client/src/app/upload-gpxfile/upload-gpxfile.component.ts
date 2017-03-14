import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowEventService } from '../show-event.service';
import { SessionService } from "../session.service";
import { FileSelectDirective,FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-upload-gpxfile',
  templateUrl: './upload-gpxfile.component.html',
  styleUrls: ['./upload-gpxfile.component.css']
})
export class UploadGpxfileComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
   url: `/create-event/upload-file`
 });

 newFile = {
   name: '',
   brand: '',
   specs: []
 };

 feedback: string;


  constructor(private eventSession: ShowEventService,private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
     this.feedback = JSON.parse(response).message;
   };

   this.uploader.onErrorItem = (item, response, status, headers) => {
     this.feedback = JSON.parse(response).message;
   };

  }
  addSpec(spec) {
   this.newFile.specs.push(spec);
 }

 submit() {
   this.uploader.onBuildItemForm = (item, form) => {
     form.append('name', this.newFile.name);
     form.append('brand', this.newFile.brand);
     form.append('specs', JSON.stringify(this.newFile.specs));
   };

   this.uploader.uploadAll();
 }

}
