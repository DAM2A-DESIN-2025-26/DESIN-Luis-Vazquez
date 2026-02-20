import { Participante } from './participante';
export interface Disfraz {
  id:          number;
  nombre:      string;
  tematica:    string;
  descripcion: string;
  imagen:      string;
  participantes: Participante[];
}
