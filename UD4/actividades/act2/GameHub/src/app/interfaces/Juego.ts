export interface Juego {
  id: number;
  titulo: string;
  plataforma: Plataforma;
  genero: string;
  precio: number;
  popular: boolean;
}

export enum Plataforma{
  PC,
  PS5,
  Xbox,
  Switch
}
