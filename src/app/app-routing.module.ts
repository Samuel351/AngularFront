import { AuthGuardService } from './guards/auth-guard.service';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { DepartamentComponent } from './departament/departament.component';
import { WorkersComponent } from './workers/workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {title: 'Login', path: 'login', component: LoginComponent},
  {title: 'Trabalhadores', path: 'worker', component: WorkersComponent, canActivate: [AuthGuardService]},
  {title: 'Departamentos', path: 'departament', component: DepartamentComponent, canActivate: [AuthGuardService]},
  {title: 'Detalhes trabalhador', path: 'worker/:id', component: WorkerDetailComponent, canActivate: [AuthGuardService]},
  {title: 'Detalhes departamento', path: 'departament/:id', component: DepartamentDetailComponent, canActivate: [AuthGuardService]},
  {title: 'teste', path: 'teste', component: FormComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
