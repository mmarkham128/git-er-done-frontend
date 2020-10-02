import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'app-view-current-jobs',
  templateUrl: './view-current-jobs.component.html',
  styleUrls: ['./view-current-jobs.component.css']
})

// The ViewCurrentJobsComponent is implementing OnInit to define its own initialization method.
export class ViewCurrentJobsComponent implements OnInit {
  posts: Post []= []
  private postsSub: Subscription;
  // The constructor is declaring the dependancy on PostsService
    constructor(public postsService: PostsService) { }
  
    // implement OnInit's `ngOnInit` method 
    ngOnInit(){
      this.postsService.getPostsCurrent()
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
          this.posts = posts;
      });
  }

  // Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
  ngOnDestroy(){
      this.postsSub.unsubscribe();
  }
  }