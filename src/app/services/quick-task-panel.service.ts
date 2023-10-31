import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickTaskPanelService {
  public isQuickTaskPanel = false;
  public taskList: any;

  public taskSubject = new Subject<any>();
  public task$ = this.taskSubject.asObservable();

  constructor() { }

  setAddTask(task: any) {
    this.taskSubject.next(task);
  }


  public openQuickTaskPanel() {
    this.isQuickTaskPanel = !this.isQuickTaskPanel;
    console.log("dropdown state from oepn: ", this.isQuickTaskPanel);
  }

  public closeQuickTaskPanel() {
    if (this.isQuickTaskPanel === true) {
      this.isQuickTaskPanel = false;
      console.log("dropdown state from close: ", this.isQuickTaskPanel);
    }
  }
}
