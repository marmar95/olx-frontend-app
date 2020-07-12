import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterForm } from 'src/app/models/RegisterForm';
import { LoginForm } from 'src/app/models/LoginForm';

const URL : string = 'https://localhost:44377/api/authentication/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials: LoginForm): Observable<any> {
    return this.http.post(`${URL}login`, {
      username: credentials.userName,
      password: credentials.password
    }, httpOptions);
  }

  register(user: RegisterForm): Observable<any> {
    return this.http.post(`${URL}register`, {
      firstname: user.firstName,
      lastName: user.lastName,
      username: user.userName,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
