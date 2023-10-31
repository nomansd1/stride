import { CdkConnectedOverlay, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ViewChild } from '@angular/core';
import { CalendarView, CalendarMonthViewDay } from 'angular-calendar';
import { addYears, format, parseISO } from 'date-fns';
import { QuickTaskPanelService } from 'src/app/services/quick-task-panel.service';
import { QuickTaskCreatePanelComponent } from '../quick-task-create-panel/quick-task-create-panel.component';
import { Subscription } from 'rxjs';
 

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

  public isQuickTaskPanel: any = this.quickTaskService.isQuickTaskPanel;
  public quickTaskOrigin: any; 
  public taskList: any = [];

  public overlayRef: any = [];
  public cellIndex: any;
  public selectedCell: any;

  public taskSubscription!: Subscription;


  constructor(
    private quickTaskService: QuickTaskPanelService,
    private overlay: Overlay,
    ) {
    this.renderCalendarHeader();
    this.renderMonthNames();
    // this.renderTask();
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

  // public toggleQuickTaskPanel(elementOrigin: any, index?: any) {
  //   this.quickTaskService.openQuickTaskPanel();
  //   this.isQuickTaskPanel = this.quickTaskService.isQuickTaskPanel;
  //   this.quickTaskOrigin = elementOrigin;
  // }
  
  public toggleQuickTaskPanel(index: any) {
    this.selectedCell = index;
    const ceLLIndex = format(index, 'dd')
    
    const btnRef: any = document.querySelector(`#overlay${ceLLIndex}`);
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

    // Only subscribe to the task$ observable once.
    if (!this.taskSubscription) {
      this.taskSubscription = this.quickTaskService.task$.subscribe(task => {
        this.taskList.push(task);
        this.closeQuickTaskPanel();
      });
    }


    this.overlayRef[ceLLIndex] = this.overlay.create(overlayConfig);
    const dropdownOverlay = new ComponentPortal(QuickTaskCreatePanelComponent);
    this.overlayRef[ceLLIndex].attach(dropdownOverlay);

    this.overlayRef[ceLLIndex].backdropClick().subscribe(() => {
      this.closeQuickTaskPanel();
      console.log(this.taskList);
      this.overlayRef[ceLLIndex].detach()
      this.overlayRef[ceLLIndex] = null;
    });
  }

  public closeQuickTaskPanel() {
    for (const overlay of this.overlayRef) {
      if (overlay && overlay.hasAttached()) {
        overlay.detach(); // Detach the overlay
        overlay.dispose(); // Dispose of the overlay
      }
    }
    // this.renderTask();
  }

  public renderTask() {
    this.taskList = this.quickTaskService.taskList;
    // console.log(this.taskList, this.quickTaskOrigin); 
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    // console.log(body.length);
    this.cellIndex = body;
    body.forEach((element: any, index: any) => {
      // console.log(index);
    })
  }
}