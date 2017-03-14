import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
//import * as xml2json from 'xml2json';
import X2JS from 'X2JS';

const BASEURL ="http://localhost:3000";

@Injectable()
export class ShowEventService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  showEvents(){
      return this.http.get(BASEURL +`/apiEvent/events`,{withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  showEvent(id){
      return this.http.get(BASEURL +`/apiEvent/event/${id}`,{withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveOneEvent(event){
    return this.http.post(BASEURL +`/apiEvent/event/new`,event,{withCredentials:true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  printMap(){
    var headers = new Headers();
    headers.append('Accept', 'application/xml');
    return this.http.get(BASEURL + `/uploads/1.gpx`, {
      headers: headers
    }).map(res => {
      var result = res.text();
      var converted:any = new X2JS().xml2js(result);
      return converted.gpx.trk.trkseg.trkpt;
    });
  }

}
