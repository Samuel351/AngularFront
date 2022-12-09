import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router) { }
  private isAuthenticated: boolean = false;

  canActivate(): boolean {
    if(this.isAuthenticated){
      alert("Tudo bem")
    }
    else{
      alert("Não vamos mostrar")
      this.router.navigate(['/login']);
    }
    return this.isAuthenticated;
  }

  Authenticate(isAuth: boolean){
    this.isAuthenticated = isAuth;
  }

  logOut(){
    this.isAuthenticated = false;
  }
}
