import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <a mat-button [matMenuTriggerFor]="menu">
      <mat-icon
      class="r-full align-middle"
      width="24"
      alt="avatar">account_circle</mat-icon>
      <span class="align-middle">Username</span>
    </a>

    <mat-menu #menu="matMenu">
      <a routerLink="#" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>Settings[1]</span>
      </a>
      <a routerLink="#" mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </a>
    </mat-menu>
  `,
})
export class UserComponent {}
