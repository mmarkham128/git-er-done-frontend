import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
 selector: 'app-view-current-jobs',
 templateUrl: './view-current-jobs.component.html',
 styleUrls: ['./view-current-jobs.component.css']
})
// The ViewCurrentJobsComponent is implementing OnInit to define its own initialization method.
export class ViewCurrentJobsComponent implements OnInit {
 posts: Post []= []
 private postsSub: Subscription;
	id: string
 // The constructor is declaring the dependancy on PostsService
  constructor(public postsService: PostsService, private router: Router) { }
  // implement OnInit's `ngOnInit` method 
ngOnInit(){
   this.postsService.getPostsCurrent()
  this.postsSub = this.postsService.getPostUpdateListener()
   .subscribe((posts: Post[]) => {
		console.log(posts);
     this.posts = posts;
   },
		error => {
		console.log(error);
});
 }
completePost(id: string): void{
 console.log(id);
 this.postsService.completePost(id).subscribe((data: Post) => {
  console.log(data);
  this.ngOnInit()
 })
}
 // Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
 ngOnDestroy(){
   this.postsSub.unsubscribe();
 }
 }