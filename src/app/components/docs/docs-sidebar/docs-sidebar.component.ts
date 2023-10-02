import { Component } from '@angular/core';
import { DocsSidebarStateService } from 'src/app/services/docs-sidebar-state.service';

@Component({
  selector: 'st-docs-sidebar',
  templateUrl: './docs-sidebar.component.html',
  styleUrls: ['./docs-sidebar.component.css']
})
export class DocsSidebarComponent {
  searchIcon = true;
  searchbarState = false;
  sidebarState = true;

  constructor(private sidebar: DocsSidebarStateService) {}
 
  showSearchbar() {
    this.searchbarState = true;
    this.searchIcon = false;
  }
  hideSearchbar() {
    this.searchbarState = false;
    this.searchIcon = true;
  }
  showSidebar() {
    this.sidebar.showSidebar();
  }
  hideSidebar() {
    this.sidebar.hideSidebar();
    this.sidebarState = false
  }
}
