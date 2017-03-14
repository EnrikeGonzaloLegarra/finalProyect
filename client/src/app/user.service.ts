import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASEURL ="http://localhost:3000";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  saveUserEdit(id,editInfo) {
    console.log();
    return this.http.post(BASEURL +`/apiUser/user/${id}`,editInfo,{withCredentials:true})
      .map(res => res.json());
    }

}
