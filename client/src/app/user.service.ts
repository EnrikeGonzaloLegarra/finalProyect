import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



const BASEURL ="http://localhost:3000";

@Injectable()
export class UserService {
  userLogged = new EventEmitter();
  user: any;
  constructor(private http: Http) { }

  saveUserEdit(id,editInfo) {
    console.log();
    return this.http.post(BASEURL +`/apiUser/user/${id}`,editInfo,{withCredentials:true})
      .map(res => res.json());
    }

  getEmitter(){
    return this.userLogged;
  }

  isLoggedIn():boolean{
    return this.user != undefined ? true : false;
  }

  getUser(){
    return this.user;
  }

  checkLogged(user) {
    this.user = user;
    this.userLogged.emit(user);
  }
}
