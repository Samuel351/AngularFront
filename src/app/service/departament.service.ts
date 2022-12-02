import { IDepartament } from '../departament';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private url = "http://localhost:8080/departament";
  private username = "admin@gmail.com";
  private password = "admin";
  headers = new HttpHeaders();
  header = this.headers.set('Access-Control-Allow-Origin', '*').append('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));

  constructor(private http: HttpClient) { }

  getDepartaments(): Observable<IDepartament[]> {
    return this.http.get<IDepartament[]>(this.url, {'headers' : this.header})
  };
}
