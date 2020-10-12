import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLoading = false;

  constructor(public authService: AuthService, public router: Router ) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.username,
      form.value.password,
      form.value.employeeFirstName,
      form.value.employeeLastName,
      form.value.employeeCellNumber,
      form.value.employeeID);
        this.router.navigate(['my-jobs'])
      
  }

  ngOnInit(): void{ }
}
