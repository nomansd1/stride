import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-listing',
  templateUrl: './docs-listing.component.html',
  styleUrls: ['./docs-listing.component.css']
})
export class DocsListingComponent {
  selectedTabIndex = 0;

  onTabSelected(index: number) {
    this.selectedTabIndex = index;
  }
}
