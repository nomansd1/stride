import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-it-tickets',
  templateUrl: './it-tickets.component.html',
  styleUrls: ['./it-tickets.component.css']
})
export class ItTicketsComponent {
  selectedTabIndex = 0;

  taskData: any;

  constructor(private apiClient: ApiClientService) {}
    
  ngOnInit(): void {
    this.getTaskData();      
  }

  onTabSelected(index: number) {
    this.selectedTabIndex = index;
  }

  getTaskData() {
    this.apiClient.getData('assets/db/tickets.json')
      .then((data) => {
        this.taskData = data.spaces;
      })
      .catch((error) => {
      console.log(error);
      })
  }
}
