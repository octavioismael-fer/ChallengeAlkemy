import { Pipe, PipeTransform } from '@angular/core';
import { IPlato } from 'src/app/models/platoscomida';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lista: IPlato[], texto: string): IPlato[] {
    if(!texto) return lista
    return lista.filter(plato => plato.title.toUpperCase().includes(texto.toUpperCase()))
  }

}
