import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs'
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
          .pipe(map(user => {
              this.userSubject.next(user);
              return user;

          }));
  }
}
