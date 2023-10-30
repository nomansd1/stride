import { Overlay } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { CalendarPickerService } from 'src/app/services/calendar-picker.service';
import { CalendarPickerComponent } from '../../calendar-picker/calendar-picker.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';


@Component({
  selector: 'st-space-board',
  templateUrl: './space-board.component.html',
  styleUrls: ['./space-board.component.css']
})
export class SpaceBoardComponent {
  @Input() data: any;
  
  actionsToolbar = false;
  createSubTaskToolbar = false;
  createNewTaskToolbar = false;

  public selectedDate: any = [];
  public overlayRef: any = [];
  private selectedDateSubscription!: Subscription;



  constructor(
    private overlay: Overlay,
    private calPickService: CalendarPickerService
  ) {}


  openCreateSubTaskToolbar() {
    this.createSubTaskToolbar = true;
  }
  closeCreateSubTaskToolbar() {
    this.createSubTaskToolbar = false;
  }
  
  openNewTaskToolbar() {
    this.createNewTaskToolbar = true;
  }
  closeNewTaskToolbar() {
    this.createNewTaskToolbar = false;
  }

  // testing for creation of overlay
  toggleCalendarPicker(index: any) {
    // Unsubscribe from the previous subscription if it exists
    if (this.selectedDateSubscription) {
      this.selectedDateSubscription.unsubscribe();
    }

    // Subscribe to the selectedDate$ observable
    this.selectedDateSubscription = this.calPickService.selectedDate$.subscribe(selectedDate => {
      selectedDate = format(selectedDate, 'MMM dd, HH:m a');
      this.selectedDate[index] = selectedDate; // Update the selectedDate array at the specified index
      this.closeCalenderPicker();
    });


    // Toggle the state for the specified row
    const btnRef: any = document.querySelector(`#overlay${index}`);
    const overlayConfig = {
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(btnRef)
        .withPositions([
          { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
          { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
        ])
        .setOrigin(btnRef),
      backdropClass: 'cdk-overlay-backdrop',
      hasBackdrop: true
    }

    this.overlayRef[index] = this.overlay.create(overlayConfig);
    const dropdownOverlay = new ComponentPortal(CalendarPickerComponent);
    this.overlayRef[index].attach(dropdownOverlay);
    console.log(this.overlayRef);


    this.overlayRef[index].backdropClick().subscribe(() => {
      this.overlayRef[index].detach()
      this.overlayRef[index] = null;
    });
    // this.isDropdownOpen = !this.isDropdownOpen;
  }

  public closeCalenderPicker() {
    for (const overlay of this.overlayRef) {
      if (overlay && overlay.hasAttached()) {
        overlay.detach(); // Detach the overlay
        overlay.dispose(); // Dispose of the overlay
      }
    }
  }
}
