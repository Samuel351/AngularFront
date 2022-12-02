import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { DepartamentComponent } from './departament/departament.component';
import { WorkersComponent } from './workers/workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {title: 'Trabalhadores', path: 'worker', component: WorkersComponent},
  {title: 'Departamentos', path: 'departament', component: DepartamentComponent},
  {title: 'Detalhes trabalhador', path: 'idWorker', component: WorkerDetailComponent},
  {title: 'Detalhes departamento', path: 'idDepartament', component: DepartamentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
