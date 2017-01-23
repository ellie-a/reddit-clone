import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../../../post.model';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent {
  @Input() childSelectedPost: Post;
  @Input() selectedPost: boolean;
  @Output() doneClickedSender = new EventEmitter;

  doneButtonClicked(){
    this.doneClickedSender.emit();
  }
  constructor() { }

}
