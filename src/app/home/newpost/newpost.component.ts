import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {
  @Output() newPostSender = new EventEmitter();
  constructor() { }

  submitForm(title: string, author: string, content: string) {
    var newPost: Post = new Post(title, author, content);
    this.newPostSender.emit(newPost);
  }

}
