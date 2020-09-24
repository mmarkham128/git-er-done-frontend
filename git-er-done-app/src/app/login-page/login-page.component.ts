import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { User } from '../models/users';
import { UsersService} from '../services/users.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  users: User[]= []
  private usersSub: Subscription;

  constructor(public usersService : UsersService){ }

  ngOnInit(){
    this.usersService.getUsers()
    this.usersSub = this.usersService.getUserUpdateListener()
    .subscribe((users: User[]) => {
      this.users = users
    });
  }
  ngOnDestroy(){
    this.usersSub.unsubscribe();
  }

}
