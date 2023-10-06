import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDocComponent } from 'src/app/components/docs/docs-creation/create-doc/create-doc.component';
import { ApiClientService } from 'src/app/services/api-client.service';
import { SidebarStateService } from 'src/app/services/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  spaces: any;
  userInfo = false;

  ngOnInit(): void {
    this.getSpaces()
  }

  constructor(
    private apiClient: ApiClientService,
    public sidebarStateService: SidebarStateService,
    public dialog: MatDialog
  ) {}

  getSpaces() {
    this.apiClient.getData('assets/db/db.json')
      .then((data) => {
        this.spaces = data.spaces;        
      })
      .catch((error) => {
        console.log(error);
      })
  }

  toggleUserInfo() {
    this.userInfo = !this.userInfo;
    console.log(this.userInfo);
  }

  toggleSidebar() {
    this.sidebarStateService.toggleSidebarState();
  }

  // Open docs creation modal
  openDialog() {
    const dialogRef = this.dialog.open(CreateDocComponent, {
      width: '90%',
      height: '90%',
      maxWidth: '100vw',
      panelClass: 'custom__modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
