import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthData } from "./auth-data.model"
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(username: string, password:string, employeeFirstName:string, employeeLastName: string, employeeCellNumber: number, employeeID: number){
    const authData: AuthData = {
      username: username,
      password: password,
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeeCellNumber: employeeCellNumber,
      employeeID: employeeID }
    this.http.post("http://localhost:3000/api/users/signup", authData)
    .subscribe(response => {
      console.log(response)
    });
  };

  login(username: string, password:string, employeeFirstName:string, employeeLastName: string, employeeCellNumber: number, employeeID: number){
    const authData: AuthData = {
      username: username,
      password: password,
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeeCellNumber: employeeCellNumber,
      employeeID: employeeID }

    this.http.post("http://localhost:3000/api/users/login", authData)
    .subscribe((response: any) => {
      console.log(response);
      localStorage.setItem("token",response.token);
    })

  };
};



