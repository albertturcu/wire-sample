import {
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() showToggle = true;

  @Output() toggleSidenav = new EventEmitter<void>();


  constructor() {}

}
