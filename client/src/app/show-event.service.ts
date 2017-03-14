import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

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
}
