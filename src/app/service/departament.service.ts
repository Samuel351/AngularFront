import { IDepartament } from '../models/departament';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private url = "http://localhost:8080/departament";
  private username = "admin@gmail.com";
  private password = "admin";
  private id = 1;
  headers = new HttpHeaders();
  header = this.headers.set('Access-Control-Allow-Origin', '*').append('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));

  constructor(private http: HttpClient) { }

  getDepartaments(): Observable<IDepartament[]> {
    return this.http.get<IDepartament[]>(this.url, {'headers' : this.header})
  };

  getDepartament(): Observable<IDepartament> {
    return this.http.get<IDepartament>(this.url+'/'+this.id, {'headers' : this.header})
  };

  addDepartament(departament: IDepartament): Observable<IDepartament>{
    return this.http.post<IDepartament>(this.url, departament, {'headers' : this.header})
  }
}
