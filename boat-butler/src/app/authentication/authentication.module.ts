import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [LoginComponent, AuthenticationComponent],
})
export class AuthenticationModule {}
