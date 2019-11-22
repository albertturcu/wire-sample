import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon style="color: white" matBadge="3" matBadgePosition="above after" matBadgeColor="warn">email</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <mat-nav-list>
        <mat-list-item *ngFor="let message of messages">
          <mat-icon>account_circle</mat-icon>
          <button mat-icon-button>
            <a matLine href="#">{{  message }}</a>
          </button>
        </mat-list-item>
      </mat-nav-list>
    </mat-menu>
  `,
})
export class InboxComponent {
  messages = ['Hej!', 'Hello!', 'Ola!'];
}
