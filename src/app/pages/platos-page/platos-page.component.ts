import { Component, OnInit } from '@angular/core';

//Import de servicio que hace la peticion get.
import { PlatosComidaService } from './../../services/platos-comida.service';
//Import de interfaces.
import { IPlato } from 'src/app/models/platoscomida';
import { Results } from './../../models/platoscomida';

@Component({
  selector: 'app-platos-page',
  templateUrl: './platos-page.component.html',
  styleUrls: ['./platos-page.component.css'],
})
export class PlatosPageComponent implements OnInit {
  cargando: boolean = true;

  handleSearch(value: string) {
    if (value.length > 2) {
      this.filtro_valor = value;
    }
  }

  filtro_valor = '';

  //Creo un plato para luego pasarlo como input que recibe la info.
  platoDeComida: IPlato | undefined;

  //Creo Lista de Platos
  listaDePlatos: IPlato[] = [];

  //Lista para platos de menu.
  listaParaMenu: IPlato[] = [];

  constructor(private platosComida: PlatosComidaService) {}

  ngOnInit(): void {
    this.platosComida.obtenerPlatoPorCantidad(10).subscribe({
      next: (response: Results) => {
        response.results.forEach((platoDeLista: IPlato, index: number) => {
          this.listaDePlatos.push(platoDeLista);
        });
        console.log(this.listaDePlatos);
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.log('Peticion de platos terminada.'),
    });

    //  this.platosComida.obtenerPlato().subscribe((response: Results) => {
    //    this.platoDeComida = response.results[0]; //Con esto enviaremos la informacion al componente hijo.
    //  });
  }

  enviarAMenu(plato: IPlato) {
    if (this.listaParaMenu.length < 4) {
      this.listaParaMenu.push(plato);
    }
  }
}
