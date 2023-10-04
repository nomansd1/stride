import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  @Input() selectedTabIndex!:number;
}
