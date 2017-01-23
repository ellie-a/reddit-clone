import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  posts: Post[] = [
    new Post("Trump", "altleft123", "This guy's not my president!"),
    new Post("Cute Kitten", "catlover55", "Cats watching cat videos"),
    new Post("Zebras", "GotTheGallop", "They got stripes!")
  ]

}
