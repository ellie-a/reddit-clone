import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() childPostList: Post[];
  // @Output() clickSender = new EventEmitter();

  selectedPost = false;

  postHasBeenClicked(postToShow: Post) {
    this.selectedPost = true;
    console.log(this.selectedPost);
    // this.clickSender.emit(postToShow);
  }

  postDone() {
    this.selectedPost = false;
  }

  constructor() { }

}
