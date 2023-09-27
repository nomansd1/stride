import { Component } from '@angular/core';

@Component({
  selector: 'st-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent {

  // st-sidebar
  searchIcon = true;
  searchbarState = false;

  showSearchbar() {
    this.searchbarState = true;
    this.searchIcon = false;
  }
  hideSearchbar() {
    this.searchbarState = false;
    this.searchIcon = true;
  }
}
