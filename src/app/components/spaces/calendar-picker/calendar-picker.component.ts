import { Component, Input } from '@angular/core';
import { addDays, format, getDay } from 'date-fns';

@Component({
  selector: 'st-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.css']
})
export class CalendarPickerComponent {
  
  viewDate: Date = new Date();
  currentDay!: string;
  currentDate!: Date | string;
  // later: string;
  tomorrowDate!: Date | string;
  tomorrowDay!: string;
  thisWeekendDate!: Date | string;
  thisWeekendDay!: string;
  nextWeek: string = "Monday";
  nextWeekendDate!: Date | string;
  twoWeeks!: Date | string;
  fourWeeks!: Date | string;
  calendarShorcutOptions: any;
  constructor() {
    this.renderDefaultDates()
  }

  renderDefaultDates() {
    // For today
    let today = new Date()
    this.currentDate = format(today, 'MM-dd-yyyy')
    this.currentDay = format(today, 'E')
    
    // For tomorrow
    let tomorrow: Date | number = new Date(today)
    tomorrow = tomorrow.setDate(today.getDate() + 1)
    this.tomorrowDate = format(tomorrow, 'MM-dd-yyyy')
    this.tomorrowDay = format(tomorrow, 'E')
    
    // For this weekend
    let daysUntilSaturday = 6 - today.getDay()
    let saturdayDate: Date | number = new Date(today)
    saturdayDate = saturdayDate.setDate(today.getDate() + daysUntilSaturday)
    this.thisWeekendDate = format(saturdayDate, 'MM-dd-yyyy')
    this.thisWeekendDay = format(saturdayDate, 'e')

    // For next weekend
    let nextSaturdayDate: Date | number = new Date(today)
    nextSaturdayDate = nextSaturdayDate.setDate(today.getDate() + daysUntilSaturday + 7)
    this.nextWeekendDate = format(nextSaturdayDate, 'MM-dd-yyyy')

    // For two weeks later
    let twoWeeksLater: Date| number = new Date(today);
    twoWeeksLater = twoWeeksLater.setDate(today.getDate() + 14)
    this.twoWeeks = format(twoWeeksLater, 'MM-dd-yyyy')

    // For four weeks
    let fourWeeksLater: Date| number = new Date(today)
    fourWeeksLater = fourWeeksLater.setDate(today.getDate() + 28)
    this.fourWeeks = format(fourWeeksLater, 'MM-dd-yyyy')

    this.calendarShorcutOptions = [
      { title: 'Today', detail: this.currentDate },
      { title: 'Tomorrow', detail: this.tomorrowDay },
      { title: 'This Weekend', detail: this.thisWeekendDay },
      { title: 'Bext Week', detail: this.nextWeek },
      { title: 'Next Weekend', detail: this.nextWeekendDate },
      { title: 'Two Weeks', detail: this.twoWeeks },
      { title: 'Four Weeks', detail: this.fourWeeks },
    ]
  }

  selectToday() {
    const today = new Date();

  }
  
}
