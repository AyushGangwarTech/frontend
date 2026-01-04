import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class User {
  
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
    // return this.http.post('${this.apiUrl}/register', userData);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getLatestUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`);
  }

  findDonor(city: string, bloodGroup: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search`,
      {
        params: { city: city, bloodGroup: bloodGroup }
      }
    );
  }
}
