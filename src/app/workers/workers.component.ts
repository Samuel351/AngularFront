import { IDepartament } from './../models/departament';
import { DepartamentService } from './../service/departament.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WorkerService } from '../service/worker.service';
import { Component, OnInit } from '@angular/core';
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
      title = "Funcionários"
      departament : any;
      selected: number = 0;

      onSelected(){
        this.departament.Id = this.selected;
        console.log(this.departament);
      }

      constructor(private workerService : WorkerService, private departamentService : DepartamentService){}

      ngOnInit(): void {
        this.getWorkers();
        this.DropdownDepartaments();
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
        form.value.departament.id = this.departament.id;
        this.workerService.addWorker(form.value).subscribe((response: IWorker) => { console.log(response), console.log(response.departament)}, (error: HttpErrorResponse) => {alert(error.message)})
      }

  }
