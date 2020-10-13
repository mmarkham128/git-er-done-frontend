import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { User } from '../../models/users';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  users: User []= []
  private usersSub: Subscription;
  
    constructor(public usersService: UsersService) { }
  
    ngOnInit(){
      this.usersService.getUsers()
    this.usersSub = this.usersService.getUserUpdateListener()
      .subscribe((users: User[]) => {
          this.users = users;
      });
  }

  removeEmployee(id: string): void{
    console.log(id);
    this.usersService.removeUser(id).subscribe((data: User) => {
      console.log(data);
      this.ngOnInit()
  
    })
  }


  ngOnDestroy(){
      this.usersSub.unsubscribe();
  }
  }
  
