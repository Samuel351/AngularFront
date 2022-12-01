import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkerService } from './../worker.service';
import { Component, OnInit } from '@angular/core';
import { IWorker } from '../worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: []
})
export class WorkersComponent implements OnInit {
      workers: IWorker[] = [];

      constructor(private workerService : WorkerService){}

      ngOnInit(): void {
        this.getWorkers();
      }
    
      getWorkers(): void {
        this.workerService.getWorkers()
        .subscribe(workers => this.workers = workers);
      }
  }
