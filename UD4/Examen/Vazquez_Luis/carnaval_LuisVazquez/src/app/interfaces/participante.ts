import { Desfile } from "./desfile";
import { Disfraz } from "./disfraz";

export interface Participante {
  id:              number;
  nombre:          string;
  fechaNacimiento: Date;
  premios:         number;
  puntuacion:      number;
  desfile:         Desfile;
  disfraces:       Disfraz[];
}
