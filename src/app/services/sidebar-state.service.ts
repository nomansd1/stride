import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {
  private sidebarOpenSubject = new BehaviorSubject<boolean>(true);
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();

  toggleSidebarState() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
  }
}
