import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DepartamentComponent } from './departament/departament.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DepartamentComponent,
    DepartamentDetailComponent,
    WorkerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
