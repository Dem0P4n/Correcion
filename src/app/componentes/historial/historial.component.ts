import { Component, Input, Output, EventEmitter } from '@angular/core';
import { registroHistorial } from './../../modelos/registro-historial'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {

  @Input() public historial! : registroHistorial;



}
