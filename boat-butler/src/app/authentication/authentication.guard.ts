import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authenticationService: AuthenticationService, private router: Router){}
  
  canActivate() {
    return this.handleRoute();
  }

  canActivateChild() {
    return this.handleRoute();
  }

  private handleRoute() {
    const user = this.authenticationService.currentUserValue();
    if (user) {
        return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}