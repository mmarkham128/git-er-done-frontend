import { Component, OnInit } from '@angular/core';
import { observable, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
  posts: Post []= []
  private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(){
    this.postsService.getPostsCompleted()
  this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
        this.posts = posts;
    });
}

}
