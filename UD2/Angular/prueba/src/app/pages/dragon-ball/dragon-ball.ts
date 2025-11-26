import { Component, signal } from '@angular/core';

export interface Personaje {
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
  personajes = signal <Personaje[]>([
    { id: 1, name: 'Goku', power: 3000 },
    { id: 2, name: 'Krillin', power: 100 },
    { id: 3, name: 'Piccolo', power: 2000 },
  ]);

}
