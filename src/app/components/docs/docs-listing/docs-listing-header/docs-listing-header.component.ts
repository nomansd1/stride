import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateDocComponent } from '../../docs-creation/create-doc/create-doc.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'st-docs-listing-header',
  templateUrl: './docs-listing-header.component.html',
  styleUrls: ['./docs-listing-header.component.css']
})
export class DocsListingHeaderComponent {
  @Input() selectedTabIndex: number = 0;
  @Output() tabSelected = new EventEmitter<number>();
  
  constructor(private dialog: MatDialog) {}

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
