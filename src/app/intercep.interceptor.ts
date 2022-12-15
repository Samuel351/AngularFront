import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class IntercepInterceptor implements HttpInterceptor {

  private authUrl = "http://localhost:8080/user"
  private workerUrl = "http://localhost:8080/worker"
  private username = "ceo@gmail.com";
  private password = "ceo";
  headers = new HttpHeaders();
  header = this.headers.set('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Request de autorização
    if(request.url == this.authUrl){
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          if(err.status == 500){
            alert("Erro interno no servidor!")
          }
          else{
            console.log(err.error)
          }
          return EMPTY;
        })
      );
    }

    if(request.url == this.workerUrl){
      this.header.append('Content-Type', 'multipart/form-data');

      const newRequest = request.clone({
        'headers': this.header
      });

      return next.handle(newRequest).pipe(
        catchError((err: HttpErrorResponse) => {
          if(err.status == 500){
            alert("Erro interno no servidor!")
          }
          else{
            console.log(err.error)
          }
          return EMPTY;
        })
      );
    }

    const newRequest = request.clone({
      'headers': this.header
    });

    // Requests de requisitar e enviar dados
    return next.handle(newRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status == 404)
        {
          console.log(err.error)
          this.router.navigate(['/**'])
        }
        else if(err.status == 406)
        {
          err.error.forEach((element: any) => {
            console.log(element.message)
            alert(element.message)
          });
        }
        else if(err.status == 409)
        {
            alert(err.error.message)
        }
        else if(err.status == 401)
        {
          alert("Você não tem autorização")
          this.router.navigate(['/login'])
        }
        else if(err.status == 500){
          alert("Erro interno no servidor!")
        }

        alert(err.message)

        return EMPTY;
      })
    );
  }
}
