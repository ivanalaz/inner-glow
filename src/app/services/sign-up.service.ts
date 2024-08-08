import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private apiUrl = `${environment.apiUrl}/users`; // Adjust the endpoint as necessary

  constructor(private http: HttpClient) { }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData);
  }
}
