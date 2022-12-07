import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  username: any;
  password: any;

  constructor() { }

  getValues(username: any, password: any){
    this.username = username;
    this.password = password;
  }

  getUser(){
    return this.username;
  }

  getPassword(){
    return this.password;
  }
}
