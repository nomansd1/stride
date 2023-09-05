import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userInfo = false;

  toggleUserInfo() {
    this.userInfo = !this.userInfo;
    console.log(this.userInfo);
    
  }
}
