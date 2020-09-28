import { Injectable } from '@angular/core';
import { User } from '../models/users'
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  myUsersURL: string = "http://localhost:3000/api/users"
  private users: User[]= [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) { }


getUsers() {
  this.http.get<{message: string, users: User[] }> ("http://localhost:3000/api/users")
  .subscribe((userData) => {
    this.users = userData.users
    this.usersUpdated.next([...this.users])
  });
}

addUser(
  employeeFirstName: string,
    employeeLastName: string,
    employeeCellNumber: number,
    username: string,
    password: string,
     admin: boolean,
    employeeID: number,
    id:string ){
  const user: User = {id: null, employeeFirstName:employeeFirstName, employeeLastName:employeeLastName,employeeCellNumber:employeeCellNumber, username:username, password:password, admin:admin, employeeID:employeeID, };

  this.http.post<{message: string}>("http://localhost:3000/api/users", user)
  .subscribe(responseData => {
      console.log(responseData)
  })
  this.users.push(user)
  this.usersUpdated.next([...this.users]);
}

getUserUpdateListener(){
  return this.usersUpdated.asObservable();
}
}


