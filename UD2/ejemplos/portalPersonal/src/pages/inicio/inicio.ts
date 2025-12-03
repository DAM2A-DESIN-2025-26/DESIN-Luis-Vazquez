import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
visitas = signal(0);

contarVisitas(){
  this.visitas.update(valor => valor +1)
}
}
