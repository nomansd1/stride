import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiClientService } from 'src/app/services/api-client.service';
import { ListSelectionToolbarService } from 'src/app/services/list-selection-toolbar.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-space-project',
  templateUrl: './space-project.component.html',
  styleUrls: ['./space-project.component.css']
})
export class SpaceProjectComponent {
  @Input() data: any;
  isRowSelected = false;
  selectedRows: number[]= [];
  taskRowVisibility: boolean[] = [];  
  closedTaskFilterButton = "Show Closed"; // button text for filtration button for closed task
  listOfFolders: any[] = [];
  listOfSubFolders: any[] = [];
  listOfTasks: any[] = [];
  tasks: any[] = [];
  subTasks: any[] = [];
  newTaskName!: string;
  // for temporay use 
  savedTaskList: any = []

  constructor(
    private selectionToolbarService: ListSelectionToolbarService,
    private apiClient: ApiClientService,
    public dialog: MatDialog
    ) {}

  // When the component initializes or when the 'data' input changes, update the 'lists' property
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      console.log(this.data);
      this.listOfFolders = [].concat(
        ...this.data.map((item:any) => item.folders)
      );
      this.listOfSubFolders = [].concat(
        ...this.listOfFolders.map((item:any) => item.subfolders)
      )
      this.listOfTasks = [].concat(
        ...this.listOfSubFolders.map((item:any) => item.lists)
      )
      this.taskRowVisibility = Array(this.listOfTasks.length).fill(false);      
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
    this.toggleListSelectionToolbar();
    this.selectionToolbarService.setSelectedRowsCount(this.selectedRows.length);
  }

  showAddNewTaskToolbar(index: number): void {
    this.taskRowVisibility[index] = true;
  }

  hideAddNewTaskToolbar(index: number): void {
    this.taskRowVisibility[index] = false;
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

  addNewTask() {
    console.log(this.newTaskName);
    this.savedTaskList.push(this.newTaskName)
  }

  // open task detail modal
  openDialog() {
    const dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '95%',
      height: '95%',
      maxWidth: '100vw',
      panelClass: 'custom__modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
