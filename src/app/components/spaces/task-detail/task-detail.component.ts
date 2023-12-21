import { Component } from '@angular/core';
import { ScheduleMeetingComponent } from '../schedule-meeting/schedule-meeting.component';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { DropdownComponent } from '../../layout/dropdown/dropdown.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  
  selectedRows: number[]= [];
  selectedChecklistRow: number[] = []

  commentOverlay: any = [];
  isCommentCheckboxVisible = true
  commentsCount = 0
  commentsCheckboxValue1 = true;
  commentsCheckboxValue2 = true;


  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
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
    const btnRef: any = document.querySelector(`#commentOverlay${index}`);
    const overlayConfig = {
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(btnRef)
        .withPositions([
          { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ])
        .setOrigin(btnRef),
      backdropClass: 'cdk-overlay-backdrop',
      hasBackdrop: true
    }
    this.commentOverlay[index] = this.overlay.create(overlayConfig);
    const dropdownOverlay = new ComponentPortal(DropdownComponent);
    this.commentOverlay[index].attach(dropdownOverlay);


    this.commentOverlay[index].backdropClick().subscribe(() => {
      this.commentOverlay[index].detach()
      this.commentOverlay[index] = null;
    });
  }

  public toggleCommentsScheduleCheckbox() {
    this.isCommentCheckboxVisible = !this.isCommentCheckboxVisible
  }

  public commentsScheduleMeetingCount() {
    
  }
}
