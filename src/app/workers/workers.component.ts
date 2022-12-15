import { from, isEmpty, Observable } from 'rxjs';
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
      departaments$: Observable<IDepartament[]> = new Observable;
      val: any;
      file: any;
      readonly url = "http://127.0.0.1:8081/fotos/";
      formulario: FormGroup;

      constructor(private workerService : WorkerService, 
        private departamentService : DepartamentService, 
        private router : Router, 
        private formBuilder : FormBuilder){

        this.formulario = this.formBuilder.group(
          {
            name: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            departament: ["", Validators.required],
            rg: ["", [Validators.min(9), Validators.required]]
          }
        )
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
        form.value.photo = this.url.split('base64,')[1];

        this.workerService.addWorker(form.value).subscribe(() => this.getWorkers())

        // Fecha a pop-up de cadastro
        this.closemodal.nativeElement.click();
      }

      addWorkerForms(): void{
        const form = new FormData();
        form.append('worker', JSON.stringify(this.formulario.value))
        form.append('file', this.file, this.file.name)

        this.workerService.addWorkerForm(form).subscribe(() => this.getWorkers())

        // Fecha a pop-up de cadastro
        this.closemodal.nativeElement.click();
      }

      onFileSelected(event: any){
        this.file = <File> event.target.files[0];

        /*
        let reader = new FileReader();
        reader.readAsDataURL(this.file)
        reader.onload = () => {
          this.url = reader.result
        }*/
      }
}