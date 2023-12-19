import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-sap-qa-module',
  templateUrl: './sap-qa-module.component.html',
  styleUrls: ['./sap-qa-module.component.css']
})
export class SapQaModuleComponent implements OnInit {
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
    this.apiClient.getData('assets/db/database.json')
      .then((data) => {
        this.taskData = data.spaces;
      })
      .catch((error) => {
      console.log(error);
      })
  }

}
