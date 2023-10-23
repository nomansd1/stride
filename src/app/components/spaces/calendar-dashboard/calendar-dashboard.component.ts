import { DatePipe, FormStyle, TranslationWidth, getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { addYears, format, parseISO } from 'date-fns';

@Component({
  selector: 'st-calendar-dashboard',
  templateUrl: './calendar-dashboard.component.html',
  styleUrls: ['./calendar-dashboard.component.css'],
})
export class CalendarDashboardComponent {
  public viewDate = new Date();
  public viewYears = new Date();
  public view: CalendarView = CalendarView.Month;
  public daysOfWeek: any = [];

  public isDropdownOpen = false;
  public monthNames: any;
  public activeMonth: any;
  public selectedMonth: any;

  constructor() {
    this.renderCalendarHeader();
    this.renderMonthNames();  
  }

  public renderCalendarHeader() {
    for (let i = 0; i < 7; i++) {
      const dayName = format(new Date(0, 0, i), 'EEEE');
      this.daysOfWeek.push(dayName);
    }
  }
  public toggleMonthSelection() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  public changeYear(changeValue: number) {
    this.viewYears = addYears(this.viewYears, changeValue);
  }
  public renderMonthNames() {
    this.monthNames = getLocaleMonthNames('en', FormStyle.Standalone, TranslationWidth.Abbreviated);
    this.activeMonth = format(this.viewDate, 'MMM');
  }
  // This function will select a month via dropdown of month selection
  public selectionOfMonth(month: any) {
    this.activeMonth = month;
    this.isDropdownOpen = false;
  }
}
