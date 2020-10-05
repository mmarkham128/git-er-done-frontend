import { Component, OnInit } from '@angular/core';
// import { UsersService} from '../services/users.service'
import {  Router, ActivatedRoute } from '@angular/router'
import { first } from 'rxjs/operators'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLoading = false;
  submitted = false;
  email: string;
  password: string;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    // private usersService: UsersService

  ){ }


  ngOnInit(){

  }


  onSubmit(f: NgForm) {
    console.log(f.value)
}

}
