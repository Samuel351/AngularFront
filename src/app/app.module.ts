import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DepartamentComponent } from './departament/departament.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DepartamentComponent
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
