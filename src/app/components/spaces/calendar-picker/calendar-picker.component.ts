import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addDays, format, getDay } from 'date-fns';
import { CalendarView, CalendarEvent, CalendarMonthViewDay, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { CalendarPickerService } from 'src/app/services/calendar-picker.service';

@Component({
  selector: 'st-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.css']
})
export class CalendarPickerComponent {
  
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  daysOfWeek: any = [];
  
  currentDay!: string;
  currentDate!: Date | string;
  tomorrowDate!: Date | string;
  tomorrowDay!: string;
  thisWeekendDate!: Date | string;
  thisWeekendDay!: string;
  nextWeek: string = "Mon";
  nextWeekendDate!: Date | string;
  twoWeeks!: Date | string;
  fourWeeks!: Date | string;
  calendarShortcutOptions: any;
  
  dateOptions: string[] = [];
  startDate!: string;
  endDate!: string;
  startDateInputType!: any;
  endDateInputType!: any;
  
  selectedDate: any = this.startDate;
  
  @Output() selectedDateChange = new EventEmitter<any>();

  constructor(private calPickService: CalendarPickerService) {
    this.renderDefaultDates()
    this.renderCalendarHeader()
    // this.generateDateOptions();
  }

  // For select dropdown dates option
  // generateDateOptions() {
  //   const currentDate = new Date();
  //   const startYear = currentDate.getFullYear() - 10;
  //   const endYear = currentDate.getFullYear() + 10;
  //   const options = [];

  //   for (let year = startYear; year <= endYear; year++) {
  //     for (let month = 0; month < 12; month++) {
  //       let date: any = new Date(year, month, 1);
  //       date = format(date, 'MM/dd/yyyy')
  //       options.push(date);
  //     }
  //   }

  //   this.dateOptions = options;
  // }

  renderCalendarHeader() {
    for (let i = 0; i < 7; i++) {
      const dayName = format(new Date(0, 0, i), 'E');
      this.daysOfWeek.push(dayName);
    }
  }

  onDateClick(dateObj: any) {    
    this.selectedDate = dateObj.date;
    // this.selectedDate = format(this.selectedDate, 'MMM dd')
    this.startDate = this.selectedDate;
    this.calPickService.setSelectedDate(this.selectedDate);
    this.selectedDateChange.emit(this.selectedDate);
  }

  renderDefaultDates() {
    // For today
    let today = new Date()
    this.currentDate = format(today, 'MMM dd')
    this.currentDay = format(today, 'E')
    
    // For tomorrow
    let tomorrow: Date | number = new Date(today)
    tomorrow = tomorrow.setDate(today.getDate() + 1)
    this.tomorrowDate = format(tomorrow, 'MMM dd')
    this.tomorrowDay = format(tomorrow, 'E')
    
    // For this weekend
    let daysUntilSaturday = 6 - today.getDay()
    let saturdayDate: Date | number = new Date(today)
    saturdayDate = saturdayDate.setDate(today.getDate() + daysUntilSaturday)
    this.thisWeekendDate = format(saturdayDate, 'MMM dd')
    this.thisWeekendDay = format(saturdayDate, 'E')

    // For next weekend
    let nextSaturdayDate: Date | number = new Date(today)
    nextSaturdayDate = nextSaturdayDate.setDate(today.getDate() + daysUntilSaturday + 7)
    this.nextWeekendDate = format(nextSaturdayDate, 'MMM dd')

    // For two weeks later
    let twoWeeksLater: Date| number = new Date(today);
    twoWeeksLater = twoWeeksLater.setDate(today.getDate() + 14)
    this.twoWeeks = format(twoWeeksLater, 'MMM dd')

    // For four weeks
    let fourWeeksLater: Date| number = new Date(today)
    fourWeeksLater = fourWeeksLater.setDate(today.getDate() + 28)
    this.fourWeeks = format(fourWeeksLater, 'MMM dd')

    this.calendarShortcutOptions = [
      { title: 'Today', detail: this.currentDay },
      { title: 'Tomorrow', detail: this.tomorrowDay },
      { title: 'This Weekend', detail: this.thisWeekendDay },
      { title: 'Next Week', detail: this.nextWeek },
      { title: 'Next Weekend', detail: this.nextWeekendDate },
      { title: 'Two Weeks', detail: this.twoWeeks },
      { title: 'Four Weeks', detail: this.fourWeeks },
    ]
  }

  selectToday() {
    const today = new Date();
  }
  
}
