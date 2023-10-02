import { Component } from '@angular/core';
import { DocsSidebarStateService } from 'src/app/services/docs-sidebar-state.service';

@Component({
  selector: 'st-docs-content',
  templateUrl: './docs-content.component.html',
  styleUrls: ['./docs-content.component.css']
})
export class DocsContentComponent {
  constructor(public sidebarService: DocsSidebarStateService) {}

  showSidebar() {
    this.sidebarService.toggleSidebarState();
  }
}
