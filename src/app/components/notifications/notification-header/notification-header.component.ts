import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification-header',
  templateUrl: './notification-header.component.html',
  styleUrls: ['./notification-header.component.css']
})
export class NotificationHeaderComponent {
  @Input() selectedTabIndex: number = 0;
  @Output() tabSelected = new EventEmitter<number>();
}
