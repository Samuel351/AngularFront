import { FormGroup, Validators, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  loginForm = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, Validators.required)
    }
  )

  validateData(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
    }
    else{
      console.log("Formulário inválido")
    }
  }

  get email() { return this.loginForm.get('email'); }

  get senha() { return this.loginForm.get('senha'); }

}
