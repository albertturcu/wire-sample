import {
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showToggle = true;

  @Output() toggleSidenav = new EventEmitter<void>();


  constructor() {}

}
