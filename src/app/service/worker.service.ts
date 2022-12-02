import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWorker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private url = "http://localhost:8080/worker";
  private username = "admin@gmail.com";
  private password = "admin";
  headers = new HttpHeaders();
  header = this.headers.set('Access-Control-Allow-Origin', '*').append('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(this.url, {'headers' : this.header})
  };
}
