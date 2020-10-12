import { Component, OnInit } from '@angular/core';
import { observable, Subscription } from 'rxjs';
import { Post } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-my-jobs',
	templateUrl: './my-jobs.component.html',
	styleUrls: [ './my-jobs.component.css' ]
})
export class MyJobsComponent implements OnInit {
	posts: Post[] = [];
	private postsSub: Subscription;
	id: string;

	constructor(public postsService: PostsService, private router: Router) {}
	// implement OnInit's `ngOnInit` method
	ngOnInit() {
		this.postsService.getPostsCurrent();
		this.postsSub = this.postsService.getPostUpdateListener().subscribe(
			(posts: Post[]) => {
				console.log(posts);
				this.posts = posts;
			},
			(error) => {
				console.log(error);
			}
		);
	}
	completePost(id: string): void {
		console.log(id);
		this.postsService.completePost(id).subscribe((data: Post) => {
			console.log(data);
			this.ngOnInit();
		});
	}
	// Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
	ngOnDestroy() {
		this.postsSub.unsubscribe();
	}
}
