import { NgForm } from '@angular/forms';
import { IDepartament } from './../models/departament';
import { IWorker } from './../models/worker';
import { Component, ElementRef, OnInit, ViewChild, ɵdevModeEqual } from '@angular/core';
import { DepartamentService } from '../service/departament.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkerService } from '../service/worker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {
  @ViewChild('closemodal1') closemodal1: any;
  @ViewChild('closemodal2') closemodal2: any;
  title = "Detalhes do funcionário"
  departaments$: Observable<IDepartament[]> = new Observable;
  departament: any;
  workerID: any;
  worker: any;
  val : any;
  imageUrl: any;

  constructor(private workerService : WorkerService, private activatedRoute: ActivatedRoute, private departamentService: DepartamentService, private router: Router){

  }

  ngOnInit(): void {
    this.workerID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getWorker(this.workerID);
    this.DropdownDepartaments();
  }

  getWorker(id: number): void {
    this.workerService.getWorker(id)
    .subscribe(worker => this.worker = worker)
  }

  deleteWorker(id: number): void{
    this.workerService.delWorker(id).subscribe();
    this.router.navigate(['/home/worker']);
    this.closemodal1.nativeElement.click();
  }

  editWorker(worker: IWorker){
    worker.photo = this.imageUrl.split('base64,')[1];
    this.workerService.editWorker(worker).subscribe(() => {this.getWorker(this.workerID)});
    this.closemodal2.nativeElement.click();
  }

  onFileSelected(event: any){
    this.imageUrl = <File>event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.imageUrl)
    reader.onload = () => {
      this.imageUrl = reader.result
    }
  }

  DropdownDepartaments(): void{
    this.departaments$ = this.departamentService.getDepartaments();
  }
}
