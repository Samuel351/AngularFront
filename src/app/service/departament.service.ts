import { IDepartament } from './../models/departament';
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
  headers = new HttpHeaders();
  header = this.headers.set('Access-Control-Allow-Origin', '*').append('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));

  constructor(private http: HttpClient) { }

  getDepartaments(): Observable<IDepartament[]> {
    return this.http.get<IDepartament[]>(this.url, {'headers' : this.header})
  };

  getDepartament(id: number): Observable<IDepartament> {
    return this.http.get<IDepartament>(this.url+'/'+id, {'headers' : this.header})
  };

  addDepartament(departament: IDepartament): Observable<IDepartament>{
    return this.http.post<IDepartament>(this.url, departament, {'headers' : this.header})
  }

  editDepartament(departament: IDepartament): Observable<IDepartament>{
    return this.http.put<IDepartament>(this.url+'/'+departament.id, departament, {'headers' : this.header})
  }

  delDepartament(id: number): Observable<IDepartament>{
    return this.http.delete<IDepartament>(this.url+'/'+id, {'headers' : this.header});
  }
}
