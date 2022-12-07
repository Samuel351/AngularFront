import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DepartamentComponent } from './departament/departament.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { LoginTelaComponent } from './login-tela/login-tela.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { IntercepInterceptor } from './intercep.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DepartamentComponent,
    DepartamentDetailComponent,
    WorkerDetailComponent,
    LoginTelaComponent,
    AccountComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: IntercepInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
