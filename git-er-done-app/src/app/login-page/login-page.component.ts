import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: Users = new Users();

  constructor(
    public router: Router
    ){ }

  ngOnInit(): void {
  }

  getLogin() {
    
  }

}
