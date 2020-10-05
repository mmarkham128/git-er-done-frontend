import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyJobsComponent } from './employee/my-jobs/my-jobs.component';
import { CreateEmployeeComponent } from './signup/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './signup/view-employee/view-employee.component';
import { EditEmployeeComponent } from './signup/edit-employee/edit-employee.component';
import { CreateJobComponent } from './admin/create-job/create-job.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { RestoreJobComponent } from './admin/restore-job/restore-job.component';
import { ViewAllJobsComponent } from './admin/view-all-jobs/view-all-jobs.component';
import { ViewCurrentJobsComponent } from './admin/view-current-jobs/view-current-jobs.component';
import { ViewCompletedJobsComponent } from './admin/view-completed-jobs/view-completed-jobs.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    MyJobsComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    CreateJobComponent,
    EditJobComponent,
    RestoreJobComponent,
    ViewAllJobsComponent,
    ViewCurrentJobsComponent,
    ViewCompletedJobsComponent,
    LogoutComponent,
    AdminHomeComponent,
    AdminNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
