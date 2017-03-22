import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

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
    return this.http.post(BASEURL +`/apifile/create`,event,{withCredentials:true})
    .map(res => res.json())
    .catch(this.handleError);
  }


  printMap(gpxFile){
    var headers = new Headers();
    headers.append('Accept', 'application/xml');
    return this.http.get(BASEURL + `/uploads/`+ gpxFile, {
      headers: headers
    }).map(res => {
      var result = res.text();
      var converted:any = new X2JS().xml2js(result);
      return converted.gpx.trk.trkseg.trkpt;
    }).map((objects) => {
        return objects.map((o) => {
          return {lat:parseFloat(o._lat), lng:parseFloat(o._lon)};
        })
    });
  }


  printChart(){
    var headers = new Headers();
    headers.append('Accept', 'application/xml');
    return this.http.get(BASEURL + `/uploads/1489706356589.gpx`, {
      headers: headers
    }).map(res => {
      var result = res.text();
      var converted:any = new X2JS().xml2js(result);
      return converted.gpx.trk.trkseg.trkpt;
    }).map((objects) => {
        return objects.map((o) => {
          return {ele:parseFloat(o.ele)};
        })
    });
  }

//Calcula distancia entre puntos gpx y saca la distancia entre puntos
calculateTrackPointDistance(lat1,lon1,lat2,lon2){
  var R = 6371;
  var dLat = (lat2-lat1) * (Math.PI/180);
  var dLon = (lon2-lon1) * (Math.PI/180);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;

  return d;
}



}
