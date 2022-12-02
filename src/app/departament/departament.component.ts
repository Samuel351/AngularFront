import { DepartamentService } from '../service/departament.service';
import { Component, OnInit } from '@angular/core';
import { IDepartament } from '../models/departament';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {
    departaments: IDepartament[] = [];
    title = "Departamentos";

    constructor(private departamentService: DepartamentService){}

    ngOnInit() : void{
      this.getDepartaments();
    }

    getDepartaments(): void{
      this.departamentService.getDepartaments()
      .subscribe(departaments => this.departaments = departaments)
    }
}
