import { IDepartament } from './../models/departament';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private url = "http://localhost:8080/departament";
 
  constructor(private http: HttpClient) { }

  getDepartaments(): Observable<IDepartament[]> {
    return this.http.get<IDepartament[]>(this.url)
  };

  getDepartament(id: number): Observable<IDepartament> {
    return this.http.get<IDepartament>(this.url+'/'+id)
  };

  addDepartament(departament: IDepartament): Observable<IDepartament>{
    return this.http.post<IDepartament>(this.url, departament)
  };

  editDepartament(departament: IDepartament): Observable<IDepartament>{
    return this.http.put<IDepartament>(this.url+'/'+departament.id, departament)
  };

  delDepartament(id: number): Observable<IDepartament>{
    return this.http.delete<IDepartament>(this.url+'/'+id);
  };
}
