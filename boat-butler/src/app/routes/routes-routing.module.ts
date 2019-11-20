import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

import { AUTH_ROUTES } from '../authentication/authentication.routes';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [...AUTH_ROUTES],
  },
  {
    path: '',
    loadChildren: () => import('../main/main.module').then(m => m.MainModule),
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
