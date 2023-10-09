import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent {
  
  selectedRequiredAttendee!: number;
  selectedOptionalAttendee!: number;
  
  attendees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Cassey Roe" },
    { id: 3, name: "Goerge Smith " },
  ]
}
