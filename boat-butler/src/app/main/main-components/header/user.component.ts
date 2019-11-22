import { Component } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <a mat-button [matMenuTriggerFor]="menu">
      <mat-icon
      class="r-full align-middle"
      width="100"
      alt="avatar"
      style="color: white; font-size: 30px; font-weight: 200; margin-right: 10px; margin-bottom: 10px" 
      >account_circle</mat-icon>
      <span style="color: white; font-size: 20px; padding: 5px; font-weight: 300">User</span>
      <mat-icon style="color: white">arrow_drop_down</mat-icon>
    </a>

    <mat-menu #menu="matMenu">
      <a routerLink="#" mat-menu-item>
        <mat-icon>settings_application</mat-icon>
        <span>Settings</span>
      </a>
      <a (click)="logout()" mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </a>
    </mat-menu>
  `
})
export class UserComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
