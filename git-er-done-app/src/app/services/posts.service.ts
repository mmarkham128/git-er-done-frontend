import { Post } from '../models/posts'
import { Injectable } from '@angular/core'
import {Subject} from 'rxjs'
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
// check to make sure the url is correct - should be the path to the database
  myPostsURL: string = "http://localhost:3000/api/posts"
  private posts: Post[]= [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts')
    .subscribe((postData) => {
        this.posts = postData.posts
        this.postsUpdated.next([...this.posts])
    });
    }

    getPostUpdateListener() {
      return this.postsUpdated.asObservable();
  }
}
