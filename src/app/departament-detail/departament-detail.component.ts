import { IDepartament } from './../models/departament';
import { DepartamentComponent } from './../departament/departament.component';
import { DepartamentService } from './../service/departament.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWorker } from '../models/worker';

@Component({
  selector: 'app-departament-detail',
  templateUrl: './departament-detail.component.html',
  styleUrls: ['./departament-detail.component.scss']
})
export class DepartamentDetailComponent implements OnInit{
  @ViewChild('closemodal1') closemodal1: any;
  @ViewChild('closemodal2') closemodal2: any;
  title = "Detalhes do departamento"
  departamentID: any;
  departament: any;
  isEmpty = false;

  constructor(private departamentService : DepartamentService ,private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.departamentID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDepartament(this.departamentID);
    if(this.departament.workers.length > 0){
      this.isEmpty = false;
    }else{
      this.isEmpty = true;
    }
  }

  getDepartament(id: number): void {
    this.departamentService.getDepartament(id)
    .subscribe(departament => this.departament = departament);
  }

  delDepartament(id : number): void{
    this.departamentService.delDepartament(id).subscribe();
    this.router.navigate(['/departament']);
    this.closemodal1.nativeElement.click();
  }

  editDepartament(departament : IDepartament){
    this.departamentService.editDepartament(departament).subscribe(() => this.getDepartament(departament.id));
    this.closemodal2.nativeElement.click();
  }

}
