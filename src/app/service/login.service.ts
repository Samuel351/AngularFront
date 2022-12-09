import { ILogin } from './../models/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = "http://localhost:8080/user";

  constructor(private http: HttpClient) { }

  valideUser(user: ILogin) : Observable<boolean> {
    return this.http.post<boolean>(this.url, user);
  }
}
