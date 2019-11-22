import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@appEnv/environment';
import { User } from '../Interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public isLoggedIn: boolean;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserValue();
    }

    public currentUserValue(): any {
        if (this.currentUser) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
      
        return this.currentUserSubject.value;
    }
    

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.SERVER_URL}/api/login`, { username: username, password: password })
            .pipe(map(user => {
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}