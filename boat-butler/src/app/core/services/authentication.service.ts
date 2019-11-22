import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@appEnv/environment';
import { User } from '../Interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    currentUserSubject: BehaviorSubject<User>;
    currentUser: Observable<User>;
    isLoggedIn: boolean = false;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserValue();
    }

    currentUserValue(): any {
        this.currentUser.subscribe(data=>{
            if (data) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        });
        return this.currentUserSubject.value;
    }

    async login(username: string, password: string) {
        const res = await this.http.post<any>(`${environment.SERVER_URL}/api/login`, { username: username, password: password }).toPromise<any>();
        localStorage.setItem('currentUser', JSON.stringify(res.useId));
        localStorage.setItem('companyId', JSON.stringify(res.companyId));
        
              
        this.currentUserSubject.next(res.userId);
        this.isLoggedIn = true;

        return this.currentUser;
    }

    logout() {
        localStorage.clear();
        this.currentUserSubject.next(null);
        this.currentUser = null;
        this.isLoggedIn = false;
    }
}