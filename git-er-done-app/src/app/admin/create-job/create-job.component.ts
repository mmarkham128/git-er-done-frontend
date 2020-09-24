import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  onAddPost(form: NgForm ) {
    if (form.invalid) {
      console.log("form invalid");
      return;
    }
    
    
this.postsService.addPost(form.value.businessName, form.value.contactFirstName, form.value.contactLastName, form.value.contactMainPhoneNumber, form.value.contactStreet, form.value.contactCity, form.value.contactState, form.value.contactZip, form.value.employeeFirstName, form.value.employeeLastName, form.value.jobNotes, form.value.employeeID, form.value.jobCompleted, form.value.jobDeleted);
form.resetForm();
}

  ngOnInit(): void {
    
  }

}
