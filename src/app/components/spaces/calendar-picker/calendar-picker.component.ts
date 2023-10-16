import { Component, Input } from '@angular/core';


@Component({
  selector: 'st-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.css']
})
export class CalendarPickerComponent {
  
  viewDate: Date = new Date();
  
  constructor() {
    console.log(this.viewDate.getDay());
  }
}
