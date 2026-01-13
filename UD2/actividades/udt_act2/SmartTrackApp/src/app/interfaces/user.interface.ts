export interface User {
  _id?: number;
  dni: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  activo: true;
  direccion: string;
  ciudad: string;
  codigo_postal: string;
  ruta_cv: string;
  perfil: string;
  fecha_nacimiento: string;
}
