import { Component, OnInit, Input } from '@angular/core';
import { IPlato } from 'src/app/models/platoscomida';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent implements OnInit {
  @Input() listaMenu: IPlato[] = [];

  listaDeMenu: any[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.listaMenu);
  }

  eliminarPlato() {
    this.listaMenu.pop();
  }

  checkMenu() {
    if (this.listaMenu.length === 4) {
      this.enviarMenu();
    } else {
      alert('El menu debe tener 4 platos.');
    }
  }

  enviarMenu() {
    const copiaMenu: IPlato[] = this.listaMenu.slice();
    this.listaDeMenu.push(copiaMenu);
    this.listaMenu.splice(0, 4);
  }
}
