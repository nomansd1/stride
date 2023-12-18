import { Component } from '@angular/core';
import { ScheduleMeetingComponent } from '../schedule-meeting/schedule-meeting.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  
  selectedRows: number[]= [];
  selectedChecklistRow: number[] = []

  commentDropdown: any = [false, false]
  
  constructor(
    private dialog: MatDialog
  ) {}

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

  // open schedule modal
  openDialog() {
    const dialogRef = this.dialog.open(ScheduleMeetingComponent, {
      width: '95%',
      height: '95%',
      maxWidth: '100vw',
      panelClass: 'custom__modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public toggleChecklistRowSelection(index: number) {
    const selectedIndex = this.selectedChecklistRow.indexOf(index);
    if (selectedIndex === -1) {
      // Row is not selected, add it to the selectedRows array
      this.selectedChecklistRow.push(index);
    } else {
      // Row is selected, remove it from the selectedRows array
      this.selectedChecklistRow.splice(selectedIndex, 1);
    }
  }

  public OpenCommentDropdown(index: any) {
    if (this.commentDropdown[index] == false) {
      this.commentDropdown[index] = true
      console.log("if block chala");
      
    }
    else {
      this.commentDropdown = true
      console.log("else block chala");
    }
  }
}
