import { DepartamentFormComponent } from './departament-form/departament-form.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { LoginTelaComponent } from './login-tela/login-tela.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { DepartamentComponent } from './departament/departament.component';
import { WorkersComponent } from './workers/workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {title: 'Login', path: 'login', component: LoginTelaComponent},
  {title: 'Trabalhadores', path: 'worker', component: WorkersComponent},
  {title: 'Departamentos', path: 'departament', component: DepartamentComponent},
  {title: 'Detalhes trabalhador', path: 'idWorker', component: WorkerDetailComponent},
  {title: 'Detalhes departamento', path: 'idDepartament', component: DepartamentDetailComponent},
  {title: 'Adicionar trabalhador', path: 'adicionarTrabalhador', component: WorkerFormComponent},
  {title: 'Adicionar departamento', path: 'adicionarDepartamento', component: DepartamentFormComponent},
  {title: 'Conta', path: 'detalhesConta', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
