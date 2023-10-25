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
  public viewYears = this.viewDate;
  public view: CalendarView = CalendarView.Month;
  public daysOfWeek: any = [];

  public isDropdownOpen = false;
  public monthNames: any;
  public activeMonth: any = this.viewDate;
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

  public getMonthsFromDate(date: Date): Date[] {
    const months: any = [];
    for (let month = 0; month < 12; month++) {
      const newDate = new Date(date);
      newDate.setMonth(month);
      months.push(newDate);
    }
    return months;
  }

  public changeYear(changeValue: number) {
    this.viewYears = addYears(this.viewYears, changeValue);
    this.renderMonthNames();
    // console.log(this.viewYears);
  }
  
  public renderMonthNames() {
    this.monthNames = this.getMonthsFromDate(this.viewYears);
    // this.activeMonth = format(this.viewYears, 'MMM');
    this.activeMonth = this.viewYears;
  }

  // This function will select a month via dropdown of month selection
  public selectionOfMonth(month: any) {
    this.activeMonth = month;    
    this.viewDate = this.activeMonth;
    this.isDropdownOpen = false;
  }
}