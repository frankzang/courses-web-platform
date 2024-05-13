import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../api/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  doLogin(email: string, password: string) {
    return this.http.post(
      `${BASE_URL}/session`,
      { email, password },
      {
        withCredentials: true,
      }
    );
  }

  getUser() {
    return this.http.get(`${BASE_URL}/user`, {
      withCredentials: true,
    });
  }
}
