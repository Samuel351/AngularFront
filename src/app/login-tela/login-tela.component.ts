import { LoginFormService } from './../service/login-form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-tela',
  templateUrl: './login-tela.component.html',
  styleUrls: ['./login-tela.component.scss']
})
export class LoginTelaComponent {
  username: any;
  password: any;


  constructor (private loginService : LoginFormService) {}

  validate(){
    console.log("Usuário: " + this.username + ", senha: " + this.password)
    this.loginService.getValues(this.username, this.password);
  }

}
