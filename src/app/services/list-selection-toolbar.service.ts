import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListSelectionToolbarService {
  isHeaderVisible = new BehaviorSubject<boolean>(false);

  // Observable to track the visibility state
  isHeaderVisible$ = this.isHeaderVisible.asObservable();

  toggleHeaderVisibility() {
    this.isHeaderVisible.next(!this.isHeaderVisible.value);
  }
  
}
