import { Component, ElementRef, OnInit, ViewChild, ɵdevModeEqual } from '@angular/core';
import { DepartamentService } from '../service/departament.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkerService } from '../service/worker.service';
import { IDepartament } from '../models/departament';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {
  @ViewChild('closemodal') closemodal: any;
  title = "Detalhes do funcionário"
  departaments: IDepartament[] = [];
  workerID: any;
  worker: any;

  constructor(private workerService : WorkerService, private activatedRoute: ActivatedRoute, private departamentService: DepartamentService, private router: Router){}

  ngOnInit(): void {
    this.workerID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getWorker(this.workerID);
  }

  getWorker(id: number): void {
    this.workerService.getWorker(id)
    .subscribe(worker => this.worker = worker);
  }

  deleteWorker(id: number): void{
    this.workerService.delWorker(id).subscribe();
    this.router.navigate(['/worker']);
    this.closemodal.nativeElement.click();
  }

  DropdownDepartaments(): void{
    this.departamentService.getDepartaments()
    .subscribe(departaments => this.departaments = departaments);
  }
}


