import { Component, Input, SimpleChanges } from '@angular/core';
import { ListSelectionToolbarService } from 'src/app/services/list-selection-toolbar.service';

@Component({
  selector: 'app-space-project',
  templateUrl: './space-project.component.html',
  styleUrls: ['./space-project.component.css']
})
export class SpaceProjectComponent {
  @Input() data: any;
  isRowSelected = false;
  selectedRows: number[]= [];
  addNewTaskToolbar = false;
  showAddTaskButton = true;
  closedTaskFilterButton = "Show Closed"; // button text for filtration button for closed task
  listOfFolders: any[] = [];
  listOfSubFolders: any[] = [];
  listOfTasks: any[] = [];
  tasks: any[] = [];

  constructor(private selectionToolbarService: ListSelectionToolbarService) { }

  // When the component initializes or when the 'data' input changes, update the 'lists' property
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.listOfFolders = this.data.reduce((acc: any[], item: any) => {
        const folders = item.folders;
        return acc.concat(folders);
      }, []);
      this.listOfSubFolders = this.listOfFolders.reduce((acc: any[], item: any) => {
        const subfolders = item.subfolders;
        return acc.concat(subfolders);
      }, []);
      this.listOfTasks = this.listOfSubFolders.reduce((acc: any[], item: any) => {
        const lists = item.lists;
        return acc.concat(lists);
      }, []);
      this.tasks = this.listOfTasks.reduce((acc: any[], item: any) => {
        const tasks = item.tasks;
        return acc.concat(tasks);
      }, []);
      // console.log(this.listOfFolders);
      // console.log(this.listOfSubFolders);
      // console.log(this.listOfTasks);
      // console.log(this.tasks);
    }
  }

  toggleRowSelection(index: any): void {
    const selectedIndex = this.selectedRows.indexOf(index);
    if (selectedIndex === -1) {
      // Row is not selected, add it to the selectedRows array
      this.selectedRows.push(index);
    } else {
      // Row is selected, remove it from the selectedRows array
      this.selectedRows.splice(selectedIndex, 1);
    }
    // this.isRowSelected = !this.isRowSelected
    this.toggleListSelectionToolbar();
    this.selectionToolbarService.setSelectedRowsCount(this.selectedRows.length);
  }
  showAddNewTaskToolbar(): void {
    this.addNewTaskToolbar = true;
    this.showAddTaskButton = false;
  }
  hideAddNewTaskToolbar(): void {
    this.addNewTaskToolbar = false;
    this.showAddTaskButton = true;
  }
  // closed task Filteration
  closedTaskFiltration(): void {
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
