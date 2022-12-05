import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DepartamentComponent } from './departament/departament.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { LoginTelaComponent } from './login-tela/login-tela.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DepartamentComponent,
    DepartamentDetailComponent,
    WorkerDetailComponent,
    LoginTelaComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
