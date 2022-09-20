import { Component, Output, EventEmitter, Input } from '@angular/core';
import { registroHistorial } from 'src/app/modelos/registro-historial';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {

  @Input() public historiales!: Array<registroHistorial>

}
