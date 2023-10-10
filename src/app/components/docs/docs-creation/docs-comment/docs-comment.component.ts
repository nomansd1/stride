import { Component } from '@angular/core';
import { DocsSidebarStateService } from 'src/app/services/docs-sidebar-state.service';

@Component({
  selector: 'st-docs-comment',
  templateUrl: './docs-comment.component.html',
  styleUrls: ['./docs-comment.component.css']
})
export class DocsCommentComponent {
  commentBoxState = true;

  constructor(public sidebar: DocsSidebarStateService) {}

  hideCommentBox() {
    this.sidebar.toggleCommentBoxState();
  }
}
