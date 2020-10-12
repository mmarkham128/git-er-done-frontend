import { Post } from '../models/posts'
import { Injectable } from '@angular/core'
import {Observable, Subject} from 'rxjs'
import { HttpClient} from '@angular/common/http'
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
// check to make sure the url is correct - should be the path to the database
  myPostsURL: string = "http://localhost:3000/api/posts"
  private posts: Post[]= [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) { }

  

  // get a list of all jobs where jobs deleted is false
  getPosts() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/posts/viewalljobs?jobDeleted=false")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              id: post._id, businessName: post.businessName, contactFirstName: post.contactFirstName,contactLastName: post.contactLastName, contactMainPhoneNumber: post.contactMainPhoneNumber, contactStreet: post.contactStreet, contactCity: post.contactCity, contactState: post.contactState, contactZip: post.contactZip, employeeFirstName: post.employeeFirstName, employeeLastName: post.employeeLastName, jobNotes:post.jobNotes, employeeID:post.employeeID, jobCompleted:post.jobCompleted,jobDeleted:post.jobDeleted
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
    // get a list of all jobs where jobCompleted is true
    getPostsCompleted() {
      this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts/viewcompletedjobs?jobCompleted=true')
      .subscribe((postData) => {
          this.posts = postData.posts
          this.postsUpdated.next([...this.posts])
      });
      }

      //git a list of all jobs where jobCompleted is false
      getPostsCurrent() {
        this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts/viewcompletedjobs?jobCompleted=false')
        .subscribe((postData) => {
            this.posts = postData.posts
            this.postsUpdated.next([...this.posts])
        });
        }

        getPostsEmployee(employeeId: string) {
          this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts/employee/' + employeeId)
          .subscribe((postData) => {
              this.posts = postData.posts
              this.postsUpdated.next([...this.posts])
          });
          }

    getPostUpdateListener() {
      return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{_id: string;
      businessName: string;
      contactFirstName: string;
      contactLastName: string;
      contactMainPhoneNumber: string;
      contactStreet: string;
      contactCity: string;
      contactState: string;
      contactZip: string;
      employeeFirstName: string;
      employeeLastName: string;
      jobNotes: string;
      employeeID: string;
      jobCompleted: boolean;
      jobDeleted: boolean;}>(
        "http://localhost:3000/api/posts/view/" + id
      )
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
    employeeID: string,
    jobCompleted: boolean,
    jobDeleted: boolean){
    const post: Post = {id: null, businessName:businessName, contactFirstName:contactFirstName,contactLastName:contactLastName, contactMainPhoneNumber:contactMainPhoneNumber, contactStreet:contactStreet, contactCity:contactCity, contactState:contactState, contactZip:contactZip, employeeFirstName:employeeFirstName, employeeLastName:employeeLastName, jobNotes:jobNotes, employeeID:employeeID, jobCompleted:jobCompleted,jobDeleted:jobDeleted  };
    this.http.post<{message: string; postId: string}>("http://localhost:3000/api/posts", post)
    .subscribe(responseData => {
      const id = responseData.postId;
      post.id = id;
        console.log(responseData)
        this.posts.push(post)
    this.postsUpdated.next([...this.posts]);
    })
}

updatePost(id: string, 
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
  employeeID: string,
  jobCompleted: boolean,
  jobDeleted: boolean) {
  const post: Post = { id: id, businessName: businessName, contactFirstName: contactFirstName, contactLastName: contactLastName, contactMainPhoneNumber: contactMainPhoneNumber, contactStreet: contactStreet, contactCity: contactCity, contactState: contactState, contactZip: contactZip, employeeFirstName: employeeFirstName, employeeLastName: employeeLastName, jobNotes: jobNotes, employeeID: employeeID, jobCompleted: jobCompleted, jobDeleted: jobDeleted  };
  this.http
    .put("http://localhost:3000/api/posts/" + id, post)
    .subscribe(response => console.log(response));
}


// relates to the back-end Router.patch
removePost(id: string): Observable<any> {
  return this.http
    .delete<any>("http://localhost:3000/api/posts/" + id)

}

completePost(id: string): Observable<any> {
  return this.http
   .delete<any>("http://localhost:3000/api/posts/complete/" + id)
 }
 

}




