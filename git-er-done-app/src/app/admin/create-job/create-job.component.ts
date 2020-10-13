import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";

import { PostsService } from '../../services/posts.service';
import { Post } from "../../models/posts";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  isLoading = false
  post: Post;
  private mode = "create";
  private postId: string;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.post = {id: postData._id, businessName: postData.businessName, contactFirstName: postData.contactFirstName, contactLastName:postData.contactLastName, contactMainPhoneNumber: postData.contactMainPhoneNumber, contactStreet: postData.contactStreet, contactCity: postData.contactCity, contactState: postData.contactState, contactZip: postData.contactZip, employeeFirstName: postData.employeeFirstName, employeeLastName: postData.employeeLastName, jobNotes: postData.jobNotes, employeeID:postData.employeeID, jobCompleted: postData.jobCompleted, jobDeleted: postData.jobDeleted}
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === "create") {
      this.postsService.addPost(form.value.businessName, form.value.contactFirstName, form.value.contactLastName, form.value.contactMainPhoneNumber, form.value.contactStreet, form.value.contactCity, form.value.contactState, form.value.contactZip, form.value.employeeFirstName, form.value.employeeLastName, form.value.jobNotes, form.value.employeeID, form.value.jobCompleted, form.value.jobDeleted);
    } else {
      this.postsService.updatePost(
        this.postId, form.value.businessName, form.value.contactFirstName, form.value.contactLastName, form.value.contactMainPhoneNumber, form.value.contactStreet, form.value.contactCity, form.value.contactState, form.value.contactZip, form.value.employeeFirstName, form.value.employeeLastName, form.value.jobNotes, form.value.employeeID, form.value.jobCompleted, form.value.jobDeleted
      );
    }
    form.resetForm();
  }
}
