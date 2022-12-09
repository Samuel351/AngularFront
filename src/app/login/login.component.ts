import { AuthGuardService } from './../guards/auth-guard.service';
import { FormGroup, NgForm } from '@angular/forms';
import { LoginService } from './../service/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email : any;
  senha: any;
  userExists = false;
  
  constructor(private loginService : LoginService, private router: Router, private authService : AuthGuardService) {
  }

  validateData(form : NgForm){
    this.loginService.valideUser(form.value).subscribe(response => this.checkValidation(response))
  }

  
  checkValidation(user : boolean){
    if(user){
      this.authService.Authenticate(user)
      alert("Usuário existe")
      this.router.navigate(['/worker']);
    }
    else{
      alert("Usuário não existe")
    }
  }
}
