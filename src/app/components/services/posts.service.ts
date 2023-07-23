import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts = "https://jsonplaceholder.typicode.com/"
  constructor(
    public httpClient: HttpClient
  ) { }

  public getPost(): Observable <any> {
   return this.httpClient.get(this.posts + 'posts');
  }
  public editPost(id,PostData): Observable<any> {
  return this.httpClient.put(`${this.posts}posts/${id}`,PostData);
  } 
  public deletePost(id):Observable<any>{
    return this.httpClient.delete(`${this.posts}posts/${id}`)
  }
  public addPost(postData): Observable<any>{
    return this.httpClient.post(`${this.posts}posts`,postData)
  }
}
