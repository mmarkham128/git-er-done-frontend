import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { Router } from '@angular/router';
import { Users } from '../models/users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: Users = new Users();

  constructor(private userService: UserService,
    public router: Router
    ){ }

  ngOnInit(): void {
  }

  getLogin() {
    this.userService.getLogin(this.user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access-token', res.token);
      this.router.navigate(['users/user-profile']);
    })
  }

}
