import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs/Observable';
import { User } from './user';
@Injectable()
export class AuthService {

  private authUrl = 'http://localhost:8000/api/auth';

  constructor(
    private http: HttpClient){}

  login(email: string, password: string){
    return this.http.post<any>(`${this.authUrl}/login`, {email: email, password: password})
      .map(response => {
        if(response.access_token){
          localStorage.setItem('token', response.access_token)
        }
      })
  }
  logout(){
    this.http.post(`${this.authUrl}/logout`, null);
    localStorage.removeItem('token');
  }
  register(user){
    return this.http.post<any>(`${this.authUrl}/register`, user)
      .map(response => {
        if(response.access_token){
          localStorage.setItem('token', response.access_token)
        }
      })
  }
  isAuthenticated(){
    return !!localStorage.getItem("token");
  }

}
