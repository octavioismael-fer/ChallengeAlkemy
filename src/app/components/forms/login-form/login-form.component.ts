import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  //Creo mi formulario y lo inicializo vacio para luego usarlo y darle forma en el ngOnInit.
  formLogin: FormGroup = new FormGroup({});

  //Creo OUTPUT con EVENTEEMITTER PARA ENVIAR INFO A COMPONENTE DE ORDEN SUPERIOR (LoginPage).
  @Output() LoginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Sobreescribo mi formulario y le agrego los campos correspondientes y sus validaciones.
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  //CREO METODO GET PARA CADA CAMPO.

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  submitLogin() {
    if (this.formLogin.valid) {
      console.table(this.formLogin.value);
      this.LoginAction.emit(this.formLogin.value);
      //Una vez que el formulario sea valido, los campos se resetean.
      this.formLogin.reset();
    }
  }
}
