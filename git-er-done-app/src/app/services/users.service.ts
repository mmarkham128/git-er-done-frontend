import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'


import { User } from '../models/users'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // url: string = "http://localhost:3000/users/login"

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private users: User[]= [];
  private usersUpdated = new Subject<User[]>();

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
      return this.userSubject.value;
    }


    login(formValues) { console.log("Git Gud Kid", formValues)
      return this.http.post<User>("http://localhost:3000/users/login", { formValues})

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


