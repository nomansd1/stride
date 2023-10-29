import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarPickerService {

  public selectedDateSubject = new Subject<any>();
  selectedDate$ = this.selectedDateSubject.asObservable();

  setSelectedDate(date: Date) {
    this.selectedDateSubject.next(date);
  }

  constructor() { }


}
