import { Component } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  
  selectedRows: number[]= [];
  
  toggleRowSelection(index: any): void {
    const selectedIndex = this.selectedRows.indexOf(index);
    if (selectedIndex === -1) {
      // Row is not selected, add it to the selectedRows array
      this.selectedRows.push(index);
    } else {
      // Row is selected, remove it from the selectedRows array
      this.selectedRows.splice(selectedIndex, 1);
    }
    // this.toggleListSelectionToolbar();
    // this.selectionToolbarService.setSelectedRowsCount(this.selectedRows.length);
  }
}
