import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    //Redireccion de login al dashboard una vez logeado.
    let token = localStorage.getItem('token')
    if(token){
      this.router.navigate(['dashboard']);
    }
  }

  //Metodo LOGIN CON REDIRRECCION AL DASHBOARD
  login(value: any){
    let {email, password} = value;
      this.authService.login(email, password).subscribe(
          (response) => {
            if(response.token){
              localStorage.setItem('token', response.token);
              this.router.navigate(['dashboard']);
            }
         },
         (error) => console.error(`Ocurrio un error en el login ${error}`),
         () => console.info('Se completo la llamada de login a Alkemy')
       );
  }

}
