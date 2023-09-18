import { Component } from '@angular/core';
import { SidebarStateService } from 'src/app/services/sidebar-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  
  constructor(public sidebarStateService: SidebarStateService) {}

  toggleSidebarState() {
    this.sidebarStateService.toggleSidebarState();
  }
}
