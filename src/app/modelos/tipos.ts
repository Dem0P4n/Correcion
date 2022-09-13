export interface Seccion {

  id?: number;
  nombreSeccion: string;

}

export interface Alumno {

  rut: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  edad: number;
  seccion: Seccion;

}

export interface registroHistorial {

  fechaHora: Date;
  alumno: Alumno;

}
