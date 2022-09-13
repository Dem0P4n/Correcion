import { Component } from '@angular/core';
import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';

  public elementosGuardadosSeccion: Array<Seccion> = [];


  public agregarSeccion(seccion: Seccion):void{
    const id: number = this.elementosGuardadosSeccion.length + 1;
    seccion.id = id;
    this.elementosGuardadosSeccion.push(seccion);
  }


}
