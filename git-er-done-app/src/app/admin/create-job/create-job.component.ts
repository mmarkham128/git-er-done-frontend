import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";

import { PostsService } from '../../services/posts.service';
import { Post } from "../../models/posts";


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
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
        this.post = this.postsService.getPost(this.postId);
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
