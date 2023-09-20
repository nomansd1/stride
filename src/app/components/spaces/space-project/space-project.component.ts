import { Component } from '@angular/core';
import { ListSelectionToolbarService } from 'src/app/services/list-selection-toolbar.service';

@Component({
  selector: 'app-space-project',
  templateUrl: './space-project.component.html',
  styleUrls: ['./space-project.component.css']
})
export class SpaceProjectComponent {
  isRowSelected = false;
  addNewTaskToolbar = false;
  showAddTaskButton = true;
  // button text for filteration button for closed task
  closedTaskFilterButton = "Show Closed"

  constructor(private selectionToolbarService: ListSelectionToolbarService) {}

  toggleRowSelection(item: any):void {
    this.isRowSelected = !this.isRowSelected
    this.toggleListSelectionToolbar();
  }
  showAddNewTaskToolbar():void {
    this.addNewTaskToolbar = true;
    this.showAddTaskButton = false;
  }
  hideAddNewTaskToolbar():void {
    this.addNewTaskToolbar = false;
    this.showAddTaskButton = true;
  }
  // closed task Filteration
  closedTaskFilteration():void {
    if (this.closedTaskFilterButton === "Show Closed") {
      this.closedTaskFilterButton = "Hide Closed";
    }
    else {
      this.closedTaskFilterButton = "Show Closed"
    }
  }
  toggleListSelectionToolbar() {
    this.selectionToolbarService.toggleHeaderVisibility();
  }
}
