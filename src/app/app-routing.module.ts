import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { DepartamentComponent } from './departament/departament.component';
import { WorkersComponent } from './workers/workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImagemComponent } from './imagem/imagem.component';

const routes: Routes = [
  {title: 'Login', path: 'login', component: LoginComponent},
  {title: 'Home', path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {title: 'Worker', path: 'home/worker', component: WorkersComponent, canActivate: [AuthGuardService]},
  {title: 'Departament', path: 'home/departament', component: DepartamentComponent, canActivate: [AuthGuardService]},
  {title: 'Workers details', path: 'home/worker/:id', component: WorkerDetailComponent, canActivate: [AuthGuardService]},
  {title: 'Departament details', path: 'home/departament/:id', component: DepartamentDetailComponent, canActivate: [AuthGuardService]},
  {title: 'teste image', path: "image", component: ImagemComponent},
  {title: '404', path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
