import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent {
  
  selectedRequiredAttendee!: number;
  selectedOptionalAttendee!: number;
  currentDate: any;
  isRecurringStartDate: boolean = true;
  isRecurringEndDate: boolean = true;

  public fromRecipient = false;

  attendees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Cassey Roe" },
    { id: 3, name: "Goerge Smith " },
  ]

  locations = [
    { id: 1, title: 'Conference Room-01' },
    { id: 2, title: 'Conference Room-02' },
    { id: 3, title: 'Conference Room-03' },
  ]

  constructor() {
    let today: any = new Date();
    this.currentDate = today.toISOString().substring(0, 10);
  }

  public formatDate() {
    // const day = this.currentDate.getDate();
    // const month = this.currentDate.getMonth() + 1;
    // const year = this.currentDate.getFullYear();
    // this.currentDate = new Date(`${day}/${month}/${year}`);
  }
}