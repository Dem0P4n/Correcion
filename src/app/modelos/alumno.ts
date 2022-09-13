import { Seccion } from './seccion'
export interface Alumno {

  rut: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  edad: number;
  seccion: Seccion;

}
