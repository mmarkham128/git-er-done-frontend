import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
// check to make sure the url is correct - should be the path to the database
  myPostsURL: string = "http://localhost:3000/posts"

  constructor() { }
}
