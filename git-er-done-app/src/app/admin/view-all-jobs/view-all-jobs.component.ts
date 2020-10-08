import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-all-jobs',
  templateUrl: './view-all-jobs.component.html',
  styleUrls: ['./view-all-jobs.component.css']
})
export class ViewAllJobsComponent implements OnInit {
posts: Post []= []
private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(){
    this.postsService.getPosts()
  this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
    },
    error => {
      console.log(error);
    });
    
}


// removePost() {
//   this.http.patch(“:_id”, {
//   “jobDeleted”: “true”,
// })
// .subscribe(
//   (val) => {
//     console.log(“PATCH was successful!”, val);
// },
// response => {
//   console.log(“PATCH call in error”, response);
// },
// () => {
//   console.log(“The PATCH observable is now complete.”);
// });


ngOnDestroy(){
    this.postsSub.unsubscribe();
}
}
