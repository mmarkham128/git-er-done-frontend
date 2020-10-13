import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;


  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  title = 'git-er-done-app';

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService, public router: Router ) {}

  ngOnInit() {
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }


  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.authService.logout();
    setTimeout( () => {
      window.location.reload()
    })
  }
}
