import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      mergeMap((event: any) => of(event)),
      catchError((err: HttpErrorResponse) => of(err))
    );
  }
}
