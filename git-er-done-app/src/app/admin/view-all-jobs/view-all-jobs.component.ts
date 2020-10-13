import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-all-jobs',
  templateUrl: './view-all-jobs.component.html',
  styleUrls: ['./view-all-jobs.component.css']
})
export class ViewAllJobsComponent implements OnInit {
posts: Post []= []
private postsSub: Subscription;
id: string

  constructor(public postsService: PostsService, private router: Router) { }

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

removePost(id: string): void{
  console.log(id);
  this.postsService.removePost(id).subscribe((data: Post) => {
    console.log(data);
    this.ngOnInit()

  })
}

ngOnDestroy(){
    this.postsSub.unsubscribe();
}
}
