import { LoginFormService } from './service/login-form.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class IntercepInterceptor implements HttpInterceptor {

  private username = "admin@gmail.com";
  private password = "admin";
  headers = new HttpHeaders();
  header = this.headers.set('Authorization', 'Basic ' + window.btoa(this.username + ':' + this.password));

  constructor(private router: Router, private loginService: LoginFormService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const newRequest = request.clone({
      'headers': this.header

    });
    console.log(request)
    console.log(newRequest)

    return next.handle(newRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status == 404)
        {
          this.router.navigate(['/**'])
        }
        else if(err.status == 406)
        {
          err.error.forEach((element: any) => {
            alert(element.message)
          });
        }
        else if(err.status == 401)
        {
          alert("Você não tem autorização")
          this.router.navigate(['/login'])
        }
        else if(err.status == 500){
          alert("Erro interno no servidor!")
        }
        else{
          console.log(err.error)
        }

        return throwError(() => new Error(err.error));
      })
    );
  }
}
