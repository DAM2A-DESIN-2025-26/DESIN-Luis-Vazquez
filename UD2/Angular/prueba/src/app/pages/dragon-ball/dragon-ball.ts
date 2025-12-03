import { Component, signal } from '@angular/core';

interface Personaje {
  id: number;
  name: String;
  power: number;
}

@Component({
  selector: 'app-dragon-ball',
  imports: [],
  templateUrl: './dragon-ball.html',
  styleUrl: './dragon-ball.scss',
})
export class DragonBall {
  name = signal('');
  power = signal(0);

  pintarValores() {
    // console.log(this.name(), this.power());
    const newPersonaje: Personaje = {
      id: this.personajes.length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.personajes.update((personajes) => [...personajes, newPersonaje]);
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.name.set('');
    this.power.set(0);
  }

  personajes = signal<Personaje[]>([
    { id: 1, name: 'Goku', power: 3000 },
    { id: 2, name: 'Krillin', power: 100 },
    { id: 3, name: 'Piccolo', power: 2000 },
  ]);
}
