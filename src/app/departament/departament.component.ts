import { NgForm } from '@angular/forms';
import { DepartamentService } from '../service/departament.service';
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { IDepartament } from '../models/departament';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {
    @ViewChild('closemodal') closemodal: any;
    departaments: IDepartament[] = [];
    title = "Departamentos";

    constructor(private departamentService: DepartamentService){}

    ngOnInit() : void{
      this.getDepartaments()
    }

    getDepartaments(): void{
      this.departamentService.getDepartaments()
      .subscribe(departaments => this.departaments = departaments)
    }

    // Colocar um interceptador
    addDepartament(form: NgForm): void{
      this.departamentService.addDepartament(form.value).subscribe(() => this.getDepartaments())
      this.closemodal.nativeElement.click()
    }
}
