import { Component } from '@angular/core';
import { DepartamentService } from '../service/departament.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkerService } from '../service/worker.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent {
  title = "Detalhes do funcionário"
  worker: any;



  constructor(private workerService : WorkerService, private activatedRoute: ActivatedRoute){}

  getWorker(id: number): void {
    this.workerService.getWorker(id)
    .subscribe(worker => this.worker = worker);
  }


}


