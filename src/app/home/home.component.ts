import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { NewpostComponent } from './newpost/newpost.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  newPost(newPostFromChild: Post) {
      this.masterPosts.push(newPostFromChild);
  }

  masterPosts: Post[] = [
    new Post("Trump", "altleft123", "This guy's not my president!"),
    new Post("Cute Kitten", "catlover55", "Cats watching cat videos"),
    new Post("Zebras", "GotTheGallop", "They got stripes!")
  ];

}
