import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWorker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  readonly url = "http://localhost:8080/worker";

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(this.url)
  };

  getWorker(id: number): Observable<IWorker> {
    return this.http.get<IWorker>(this.url+'/'+id)
  };

  addWorker(worker: IWorker): Observable<IWorker>{
    return this.http.post<IWorker>(this.url, worker)
  };

  addWorkerForm(form: FormData): Observable<any>{
    return this.http.post<any>(this.url, form)
  };

  editWorker(worker: IWorker): Observable<IWorker>{
    return this.http.put<IWorker>(this.url+'/'+worker.id, worker)
  };

  editPhoto(worker: IWorker): Observable<IWorker>{
    return this.http.patch<IWorker>(this.url+'/'+worker.id, worker)
  };

  delWorker(id: number) : Observable<IWorker>{
    return this.http.delete<IWorker>(this.url+'/'+id)
  };

}
