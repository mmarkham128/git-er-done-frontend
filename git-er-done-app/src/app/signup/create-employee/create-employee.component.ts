import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(public UsersService: UsersService) { }

  onAddUser(form: NgForm ) {
    if (form.invalid) {
      console.log("form invalid");
      return;
    }

    this.UsersService.addUser(form.value.employeeFirstName, form.value.employeeLastName, form.value.employeeCellPhone, form.value.username, form.value.password, form.value.admin, form.value.employeeID, form.value.id);
form.resetForm();
}

  ngOnInit(): void {
  }

}



  
  
   
    
    



