import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from "./auth-data.model"

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

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
  }
}
