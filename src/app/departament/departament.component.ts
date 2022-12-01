import { Component } from '@angular/core';
import { IDepartament } from '../departament';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent {
    departaments: IDepartament[] = [];
}
