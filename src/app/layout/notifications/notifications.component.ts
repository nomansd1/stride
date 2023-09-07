import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  selectedTabIndex = 0;

  onTabSelected(index: number) {
    this.selectedTabIndex = index;
  }
}
