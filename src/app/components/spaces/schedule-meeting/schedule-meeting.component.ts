import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent {
  
  selectedRequiredAttendee!: number;
  selectedOptionalAttendee!: number;
  currentDate: string;
  isRecurringStartDate: boolean = true;
  isRecurringEndDate: boolean = true;

  attendees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Cassey Roe" },
    { id: 3, name: "Goerge Smith " },
  ]

  constructor() {
    const today = new Date();
    this.currentDate = today.toISOString().substring(0, 10);
  }
}
