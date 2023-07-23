import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = []
  editForm: FormGroup
  addForm:FormGroup

  constructor(
    public postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(res => {
      console.log(res);
      this.posts = res;
    })
    this.editForm = new FormGroup({
      id: new FormControl,
      title: new FormControl,
      body: new FormControl
    })
    this.addForm =new FormGroup({
      id: new FormControl,
      title: new FormControl,
      body: new FormControl
    })
  }

  Add() {
    this.postService.addPost(this.addForm.value).subscribe(data=>{
      console.log(data)
    })
  }
  Edit(item) {
    this.editForm.patchValue(item)
  }
  updateData(item) {
    this.postService.editPost(item.id, { id: item.id, title: item.title, body: item.body }).subscribe(data => {
      console.log(data);
    })
  }
  Delete(item) {
    let confirmation = confirm('Are you Sure do you want to delete');
    if (confirmation) {
      this.postService.deletePost(item.id).subscribe(data => {
        console.log(data)
      })
    }

  }
}
