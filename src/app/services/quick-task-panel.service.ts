import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickTaskPanelService {
  public isQuickTaskPanel = false;

  constructor() { }

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
