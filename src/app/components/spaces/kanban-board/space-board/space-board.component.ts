import { Component, Input } from '@angular/core';

@Component({
  selector: 'st-space-board',
  templateUrl: './space-board.component.html',
  styleUrls: ['./space-board.component.css']
})
export class SpaceBoardComponent {
  @Input() data: any;
  
  actionsToolbar = false;
  createSubTaskToolbar = false;
  createNewTaskToolbar = false;

  openCreateSubTaskToolbar() {
    this.createSubTaskToolbar = true;
  }
  closeCreateSubTaskToolbar() {
    this.createSubTaskToolbar = false;
  }
  
  openNewTaskToolbar() {
    this.createNewTaskToolbar = true;
  }
  closeNewTaskToolbar() {
    this.createNewTaskToolbar = false;
  }
}
