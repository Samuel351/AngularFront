import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike, throwError, catchError } from 'rxjs';
import { IWorker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private url = "http://localhost:8080/worker";

  constructor(private http: HttpClient, private router: Router) { }

  getWorkers(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(this.url)
  };

  getWorker(id: number): Observable<IWorker> {
    return this.http.get<IWorker>(this.url+'/'+id)
  };

  addWorker(worker: IWorker): Observable<IWorker>{
    return this.http.post<IWorker>(this.url, worker)
  };

  editWorker(worker: IWorker): Observable<IWorker>{
    return this.http.put<IWorker>(this.url+'/'+worker.id, worker)
  }

  delWorker(id: number) : Observable<IWorker>{
    return this.http.delete<IWorker>(this.url+'/'+id)
  }

}
