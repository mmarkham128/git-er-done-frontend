import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


// imports for each of the route components
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';



// create path and components for each of the pages
const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'admin-form', component: AdminFormComponent},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule,

  ]
})
export class AppRoutingModule { }
