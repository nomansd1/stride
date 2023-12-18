import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListSelectionToolbarService } from 'src/app/services/list-selection-toolbar.service';
import { ScheduleMeetingComponent } from '../../spaces/schedule-meeting/schedule-meeting.component';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TaskLinkingPanelComponent } from '../task-linking-panel/task-linking-panel.component';
import { MergeTaskPanelComponent } from '../merge-task-panel/merge-task-panel.component';
import { WatchersPanelComponent } from '../watchers-panel/watchers-panel.component';

@Component({
  selector: 'app-task-selection-header',
  templateUrl: './task-selection-header.component.html',
  styleUrls: ['./task-selection-header.component.css']
})
export class TaskSelectionHeaderComponent implements OnInit {
  public isHeaderVisible = true;
  public selectedRowsCount: number = 0;
  public overlayRef: any;


  toolbarOptions = [
    { tooltip: 'Set Watchers', url: '', icon: '../../../../assets/watcher.svg', action: (index: number) => this.openWatchersPanel(index) },
    { tooltip: 'Set Assignees', url: '', icon: '../../../../assets/assignee.svg' },
    { tooltip: 'Set Status', url: '', icon: '../../../../assets/status.svg' },
    { tooltip: 'Convert to subtask', url: '', icon: '../../../../assets/subtask.svg' },
    { tooltip: 'Move tasks or add tasks in multiple Lists', url: '', icon: '../../../../assets/movetask.svg' },
    { tooltip: 'Duplicate tasks', url: '', icon: '../../../../assets/duplicatetask.svg' },
    { tooltip: 'Remove tasks from this List', url: '', icon: '../../../../assets/removetask.svg' },
    { tooltip: 'Set Dates', url: '', icon: '../../../../assets/setdate.svg' },
    { tooltip: 'Set Priority', url: '', icon: '../../../../assets/toolpriority.svg' },
    { tooltip: 'Dependencies', url: '', icon: '../../../../assets/dependencies.svg' },
    { tooltip: 'Merge tasks', url: '', icon: '../../../../assets/mergetask.svg', action: (index: number) => this.openMergeTaskPanel(index) },
    { tooltip: 'Tasks Referencing', url: '', icon: '../../../../assets/tasklinking.svg', action: (index: number) => this.openTaskLinkingDropdown(index) },
    { tooltip: 'No Custom Fields available', url: '', icon: '../../../../assets/nocustomfield.svg' },
    { tooltip: 'Archive tasks', url: '', icon: '../../../../assets/arch.svg' },
    { tooltip: 'Schedule Meeting', url: '', icon: '../../../../assets/meeting.svg', action: () => this.scheduleMeetingIdalog() },
    { tooltip: 'Delete', url: '', icon: '../../../../assets/del.svg' },
  ]

  constructor(
    private selectionToolbarService: ListSelectionToolbarService, 
    private dialog: MatDialog,
    private overlay: Overlay,
  ) {}

  ngOnInit(): void {
    this.selectionToolbarService.isHeaderVisible$.subscribe((isVisible) => {
      this.isHeaderVisible = isVisible;  
    });
    this.selectionToolbarService.selectedRowsCount$.subscribe((count) => {
      this.selectedRowsCount = count;
    });
  }

  private scheduleMeetingIdalog() {
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

  private openTaskLinkingDropdown(index: number): void {
    const btnRef: any = document.querySelector(`#option${index}`);
    const overlayConfig = {
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(btnRef)
        .withPositions([
          { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ])
        .setOrigin(btnRef),
      backdropClass: 'cdk-overlay-backdrop',
      hasBackdrop: true
    }

    this.overlayRef = this.overlay.create(overlayConfig);
    const dropdownOverlay = new ComponentPortal(TaskLinkingPanelComponent);
    this.overlayRef.attach(dropdownOverlay);


    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach()
      this.overlayRef = null;
    });
  }

  private openMergeTaskPanel(index: number): void {
    const btnRef: any = document.querySelector(`#option${index}`);
    const overlayConfig = {
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(btnRef)
        .withPositions([
          { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ])
        .setOrigin(btnRef),
      backdropClass: 'cdk-overlay-backdrop',
      hasBackdrop: true
    }

    this.overlayRef = this.overlay.create(overlayConfig);
    const dropdownOverlay = new ComponentPortal(MergeTaskPanelComponent);
    this.overlayRef.attach(dropdownOverlay);


    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach()
      this.overlayRef = null;
    });
  }

  private openWatchersPanel(index: number): void {
    const btnRef: any = document.querySelector(`#option${index}`);
    const overlayConfig = {
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(btnRef)
        .withPositions([
          { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ])
        .setOrigin(btnRef),
      backdropClass: 'cdk-overlay-backdrop',
      hasBackdrop: true
    }

    this.overlayRef = this.overlay.create(overlayConfig);
    const dropdownOverlay = new ComponentPortal(WatchersPanelComponent);
    this.overlayRef.attach(dropdownOverlay);


    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach()
      this.overlayRef = null;
    });
  }
}
