import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-everything-space',
  templateUrl: './everything-space.component.html',
  styleUrls: ['./everything-space.component.css']
})
export class EverythingSpaceComponent implements OnInit {
    
  taskData: any;

  constructor(private apiClient: ApiClientService) {}
    
  ngOnInit(): void {
    this.getTaskData();      
  }

  getTaskData() {
    this.apiClient.getData('assets/db/db.json')
      .then((data) => {
        this.taskData = data.spaces;
      })
      .catch((error) => {
      console.log(error);
      })
  }

}
