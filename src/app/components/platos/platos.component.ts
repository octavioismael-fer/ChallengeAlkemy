import { Component, OnInit, Input } from '@angular/core';
import { IPlato } from 'src/app/models/platoscomida';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  @Input() nuevoPlato: IPlato | undefined;
 
  constructor() { }

  ngOnInit(): void {

  }

}
