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

  addPost(
    businessName: string,
    contactFirstName: string,
    contactLastName: string,
    contactMainPhoneNumber: string,
    contactStreet: string,
    contactCity: string,
    contactState: string,
    contactZip: string,
    employeeFirstName: string,
    employeeLastName: string,
    jobNotes: string,
    employeeID: number,
    jobCompleted: boolean,
    jobDeleted: boolean){
    const post: Post = {id: null, businessName:businessName, contactFirstName:contactFirstName,contactLastName:contactLastName, contactMainPhoneNumber:contactMainPhoneNumber, contactStreet:contactStreet, contactCity:contactCity, contactState:contactState, contactZip:contactZip, employeeFirstName:employeeFirstName, employeeLastName:employeeLastName, jobNotes:jobNotes, employeeID:employeeID, jobCompleted:jobCompleted,jobDeleted:jobDeleted  };
    this.http.post<{message: string}>("http://localhost:3000/api/posts", post)
    .subscribe(responseData => {
        console.log(responseData)
    })
    this.posts.push(post)
    this.postsUpdated.next([...this.posts]);
}
}



