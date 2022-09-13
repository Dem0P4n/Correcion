import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {

  public nuevoHistorialAlumno: Alumno = {
    rut : '',
    nombreAlumno : '',
    apellidoAlumno: '',
    edad: 0,
    seccion:  {
      id: 0,
      nombreSeccion: ''
    }

  }


  public cambiarRut(rut: Event): void{
    const elemento = rut.target as HTMLInputElement;
    this.nuevoHistorialAlumno.rut = elemento.value;
  }

  public cambiarNombre(nombre: Event):void{
    const elemento = nombre.target as HTMLInputElement;
    this.nuevoHistorialAlumno.nombreAlumno = elemento.value;
  }

  public cambiarApellido(apellido: Event):void{
    const elemento = apellido.target as HTMLInputElement;
    this.nuevoHistorialAlumno.apellidoAlumno = elemento.value;
  }

  public cambiarEdad(edad: Event):void{
    const elemento = edad.target as HTMLInputElement;
    this.nuevoHistorialAlumno.edad = Number.parseInt(elemento.value)
  }





  public guardarAlumno():void{
    const copia: Alumno = {
      ...this.nuevoHistorialAlumno
    }
    this.nuevoHistorialAlumno.rut = '';
    this.nuevoHistorialAlumno.nombreAlumno = '';
    this.nuevoHistorialAlumno.apellidoAlumno = '';
    this.nuevoHistorialAlumno.edad = 0;


  }







}
