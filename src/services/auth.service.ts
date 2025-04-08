import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/login'; // Adjust to match your backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const url = `${this.apiUrl}?username=${username}&password=${password}`;
    return this.http.get<string>(url);
  }
}
