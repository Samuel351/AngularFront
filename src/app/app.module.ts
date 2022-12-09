import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DepartamentComponent } from './departament/departament.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { IntercepInterceptor } from './intercep.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DepartamentComponent,
    DepartamentDetailComponent,
    WorkerDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    FormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: IntercepInterceptor, multi: true}, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
