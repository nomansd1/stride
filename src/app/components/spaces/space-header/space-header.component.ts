import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-space-header',
  templateUrl: './space-header.component.html',
  styleUrls: ['./space-header.component.css']
})
export class SpaceHeaderComponent {
 @Input() spaceTitle!: string;

 tabs = [
  { label: 'List', icon: '../../../../assets/list.svg' },
  { label: 'Board', icon: '../../../../assets/board.svg' },
  { label: 'Calendar', icon: '../../../../assets/calendar.svg' },
 ]
}
