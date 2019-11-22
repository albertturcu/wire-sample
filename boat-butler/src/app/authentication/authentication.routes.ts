import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login', titleI18n: 'Login' },
  }
];
