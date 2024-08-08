import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${environment.authUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response));
          console.log(localStorage.getItem('user'))
        })
      );
  }
  // login(credentials: { username: string; password: string }) {
  //   return this.http.post(`${environment.authUrl}/login`, credentials, { withCredentials: true });
  // }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('user');
    }
    return false;  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('user');
    }
  }
}