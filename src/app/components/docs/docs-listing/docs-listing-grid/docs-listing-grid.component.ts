import { Component, Input } from '@angular/core';

@Component({
  selector: 'st-docs-listing-grid',
  templateUrl: './docs-listing-grid.component.html',
  styleUrls: ['./docs-listing-grid.component.css']
})
export class DocsListingGridComponent {
  @Input() selectedTabIndex!:number;
  
  // temporary used to render multiple docs need to remove once dynamic data fetched 
  arr = [1,2,3,4,5,6,7,8,9,0,23,23,34,13,56,123,436,12,34,56,34,123,123,123,43]


}
