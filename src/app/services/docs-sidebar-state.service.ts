import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocsSidebarStateService {
  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  
  toggleSidebarState() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
  }
}
