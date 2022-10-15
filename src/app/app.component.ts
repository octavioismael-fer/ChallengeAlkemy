import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'challengeAlkemy';

  token: string | null = '';

  constructor(private router: Router){}

  ngOnInit(): void{
    this.token = localStorage.getItem('token');
  }

  //Metodo de LOGOUT
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}

