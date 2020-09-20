import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/users"
  message: string;
  constructor( private http: HttpClient ) { }

  getLogin(message: string){
    this.http.get(`${this.url}/users`)
  }
}
