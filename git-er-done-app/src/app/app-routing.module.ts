import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


// imports for each of the route components
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';


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
import { AdminHomeComponent} from './admin/admin-home/admin-home.component';



// create path and components for each of the pages
const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'my-jobs', component: MyJobsComponent },
  { path: 'signup', component: CreateEmployeeComponent },
  { path: 'employee-profile', component: ViewEmployeeComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  { path: 'create-job', component: CreateJobComponent },
  { path: 'edit-job', component: EditJobComponent },
  { path: 'restore-job', component: RestoreJobComponent },
  { path: 'all-jobs', component: ViewAllJobsComponent },
  { path: 'current-jobs', component: ViewCurrentJobsComponent },
  { path: 'completed-jobs', component: ViewCompletedJobsComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'admin-home', component: AdminHomeComponent},
  { path: 'edit/:postId', component: CreateJobComponent},
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
