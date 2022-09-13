import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {


  @Output() enviarSeccion = new EventEmitter<Seccion>();

  public nuevoHistorialSeccion: Seccion = {
    nombreSeccion: ''
  }


  public nombreSeccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialSeccion.nombreSeccion = elemento.value;
  }

  public enviar():void {
    const copia: Seccion = {
      ...this.nuevoHistorialSeccion
    }
    this.enviarSeccion.emit(copia);
    this.nuevoHistorialSeccion.nombreSeccion = '';

  }

}
