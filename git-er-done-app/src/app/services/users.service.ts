import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { User } from '../models/users'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

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


    // get a list of all employees
  getUsers() {
    this.http.get<{message: string, users: User[] }>('http://localhost:3000/api/users/api/users/viewallemployees?employeeDeleted=false')
    .subscribe((userData) => {
        this.users = userData.users
        this.usersUpdated.next([...this.users])
    });
    }
  

    // relates to the back-end Router.delete
removeUser(id: string): Observable<any> {
  return this.http
    .delete<any>("http://localhost:3000/api/users/api/users/" + id)


}

getUserUpdateListener(){
  return this.usersUpdated.asObservable();
}



}


