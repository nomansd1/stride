import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {
  
  commentBoxFooter = false

  commentToolbarOptions = [
    { tooltip: 'Assignee comment', icon: 'assets/assignee.svg' },
    { tooltip: 'Add emoji', icon: 'assets/emoji.svg' },
    { tooltip: 'Mention a Task', icon: 'assets/mentiontask.svg' },
    { tooltip: 'Record Screen Clip', icon: 'assets/videoclips.svg' },
    { tooltip: 'Record Voice Clip', icon: 'assets/recordclips.svg' },
    { tooltip: 'New Document ', icon: 'assets/document.svg' },
    { tooltip: 'Add a file', icon: 'assets/attachment.svg' },
  ]
  
  showCommentBoxFooter() {
    this.commentBoxFooter = true;
  }
  hideCommentBoxFooter() {
    this.commentBoxFooter = false;
  }
}
