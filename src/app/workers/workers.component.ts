import { Observable } from 'rxjs';
import { IWorker } from './../models/worker';
import { Router, ActivatedRoute } from '@angular/router';
import { IDepartament } from './../models/departament';
import { DepartamentService } from './../service/departament.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WorkerService } from '../service/worker.service';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: []
})
export class WorkersComponent implements OnInit {
      @ViewChild('closemodal') closemodal: any;
      workers$: Observable<IWorker[]> = new Observable;
      departaments$: Observable<IDepartament[]> = new Observable;;
      isNotEmpty = true;
      val: any;

      constructor(private workerService : WorkerService, private departamentService : DepartamentService){
      }

      ngOnInit(): void {
        this.getWorkers();
        this.DropdownDepartaments();
      }

      getWorkers() {
        this.workers$ = this.workerService.getWorkers();
      }

      // Preenche caixa de seleção com os departamentos
      DropdownDepartaments(): void{
        this.departaments$ = this.departamentService.getDepartaments();
      }

      addWorker(form : NgForm): void{
        this.workerService.addWorker(form.value).subscribe(() => this.getWorkers())

        // Fecha a pop-up de cadastro
        this.closemodal.nativeElement.click();
      }
}