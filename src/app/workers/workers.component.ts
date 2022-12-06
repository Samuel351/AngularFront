import { Router, ActivatedRoute } from '@angular/router';
import { IDepartament } from './../models/departament';
import { DepartamentService } from './../service/departament.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WorkerService } from '../service/worker.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IWorker } from '../models/worker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: []
})
export class WorkersComponent implements OnInit {
      workers: IWorker[] = [];
      departaments: IDepartament[] = [];
      val : any;

      constructor(private workerService : WorkerService, private departamentService : DepartamentService){}

      ngOnInit(): void {
        this.getWorkers();
        this.DropdownDepartaments();
      }

      change(){
        this.getWorkers();
      }

      getWorkers(): void {
        this.workerService.getWorkers()
        .subscribe(workers => this.workers = workers);
      }

      DropdownDepartaments(): void{
        this.departamentService.getDepartaments()
        .subscribe(departaments => this.departaments = departaments);
      }

      addWorker(form : NgForm): void{
        console.log(this.val)
        console.log(form.value)
        this.workerService.addWorker(form.value).subscribe(() => { this.getWorkers(), console.log(form.value)}, (error: HttpErrorResponse) => {alert(error.message)})
      }

  }
