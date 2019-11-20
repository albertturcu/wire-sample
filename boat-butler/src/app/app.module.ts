import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultInterceptor } from './core/Interceptor/default.interceptor';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AuthenticationModule,
    RoutesModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    },
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
