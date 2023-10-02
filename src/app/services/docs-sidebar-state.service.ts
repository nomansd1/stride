import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocsSidebarStateService {
  sidebarState = false;
  openSidebarBtnState = true;

  constructor() { }

  showSidebar() {
    this.sidebarState = true;
    this.openSidebarBtnState= false
  }
  hideSidebar() {
    this.sidebarState = false;
    this.openSidebarBtnState = true;
  }
}
