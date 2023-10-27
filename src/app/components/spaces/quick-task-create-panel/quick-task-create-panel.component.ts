import { Component, Output, EventEmitter } from '@angular/core';
import { QuickTaskPanelService } from 'src/app/services/quick-task-panel.service';

@Component({
  selector: 'st-quick-task-create-panel',
  templateUrl: './quick-task-create-panel.component.html',
  styleUrls: ['./quick-task-create-panel.component.css']
})

export class QuickTaskCreatePanelComponent {
  @Output() close = new EventEmitter<void>();
  
  public taskList: any = []
  public taskName: string = '';

  constructor(private quickTaskService: QuickTaskPanelService) {}

  public addTask() {
    this.taskList.push(this.taskName);
    this.quickTaskService.taskList = this.taskList;
    this.quickTaskService.closeQuickTaskPanel();
    this.closePanel()
  }

  public closePanel() {
    this.close.emit();
  }
}