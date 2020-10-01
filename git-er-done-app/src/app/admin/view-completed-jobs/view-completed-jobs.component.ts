import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'app-view-completed-jobs',
  templateUrl: './view-completed-jobs.component.html',
  styleUrls: ['./view-completed-jobs.component.css']
})

export class ViewCompletedJobsComponent implements OnInit {
  posts: Post []= []
  private postsSub: Subscription;
  
    constructor(public postsService: PostsService) { }
  
    ngOnInit(){
      this.postsService.getPosts()
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
          this.posts = posts;
      });
  }
  ngOnDestroy(){
      this.postsSub.unsubscribe();
  }
  }
