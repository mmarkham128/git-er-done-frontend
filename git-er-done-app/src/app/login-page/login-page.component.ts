import { Component, OnInit } from '@angular/core';
import { UsersService} from '../services/users.service'
import {  Router, ActivatedRoute } from '@angular/router'
import { first } from 'rxjs/operators'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loading = false;
  submitted = false;
  email: string;
  password: string;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private usersService: UsersService

  ){ }


  ngOnInit(){

  }


  onSubmit(f: NgForm) {
    let formValues = f.form.value
    this.submitted = true;
    this.loading = true;
    this.usersService.login(formValues)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/my-jobs';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.loading = false;
            }
        });
}

}
