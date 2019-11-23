import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@appEnv/environment';
import { User } from '../Interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    currentUser: string;
    isLoggedIn: boolean = false;

    constructor(private http: HttpClient) {
        this.currentUserValue();
    }

    currentUserValue() {
        if (!this.currentUser) {
          this.currentUser = localStorage.getItem('currentUser');
        }
    
        if (this.currentUser) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
    
        return this.currentUser;
      }
    

    async login(username: string, password: string) {
        const res = await this.http.post<any>(`${environment.SERVER_URL}/api/login`, { username: username, password: password }).toPromise<any>();
        localStorage.setItem('currentUser', JSON.stringify(res.userId));
        localStorage.setItem('companyId', JSON.stringify(res.companyId));
        
              
        this.currentUser = res.userId;
        this.isLoggedIn = true;

        return this.currentUser;
    }

    logout() {
        localStorage.clear();
        this.currentUser = null;
        this.isLoggedIn = false;
    }
}