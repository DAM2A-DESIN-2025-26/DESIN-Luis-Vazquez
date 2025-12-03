import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mis-habilidades',
  imports: [],
  templateUrl: './mis-habilidades.html',
  styleUrl: './mis-habilidades.scss',
})
export class MisHabilidades {
  habilidades = signal([
    { nombre: "Angular", nivel: 70 },
    { nombre: "Spring", nivel: 90 },
    { nombre: "Kotlin", nivel: 60 }

  ]);

}
