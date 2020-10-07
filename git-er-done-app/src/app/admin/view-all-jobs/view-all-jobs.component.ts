import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service'

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


ngOnDestroy(){
    this.postsSub.unsubscribe();
}
}
