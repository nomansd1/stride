import { Component } from '@angular/core';

@Component({
  selector: 'app-task-selection-header',
  templateUrl: './task-selection-header.component.html',
  styleUrls: ['./task-selection-header.component.css']
})
export class TaskSelectionHeaderComponent {
  toolbarLinks = [
    { tooltip: 'Set Watchers', url: '', icon: '../../../../assets/watcher.svg' },
    { tooltip: 'Set Assignees', url: '', icon: '../../../../assets/assignee.svg' },
    { tooltip: 'Set Status', url: '', icon: '../../../../assets/status.svg' },
    { tooltip: 'Set Tags', url: '', icon: '../../../../assets/tags.svg' },
    { tooltip: 'Convert to subtask', url: '', icon: '../../../../assets/subtask.svg' },
    { tooltip: 'Move tasks or add tasks in multiple Lists', url: '', icon: '../../../../assets/movetask.svg' },
    { tooltip: 'Duplicate tasks', url: '', icon: '../../../../assets/duplicatetask.svg' },
    { tooltip: 'Remove tasks from this List', url: '', icon: '../../../../assets/removetask.svg' },
    { tooltip: 'Set Dates', url: '', icon: '../../../../assets/setdate.svg' },
    { tooltip: 'Set Priority', url: '', icon: '../../../../assets/toolpriority.svg' },
    { tooltip: 'Dependencies', url: '', icon: '../../../../assets/dependencies.svg' },
    { tooltip: 'Merge tasks', url: '', icon: '../../../../assets/mergetask.svg' },
    { tooltip: 'Tasks Linking', url: '', icon: '../../../../assets/tasklinking.svg' },
    { tooltip: 'No Custom Fields available', url: '', icon: '../../../../assets/nocustomfield.svg' },
    { tooltip: 'Archive tasks', url: '', icon: '../../../../assets/arch.svg' },
    { tooltip: 'Delete', url: '', icon: '../../../../assets/del.svg' },
  ]
}
