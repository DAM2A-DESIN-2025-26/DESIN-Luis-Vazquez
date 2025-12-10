import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Personaje {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
  imports: [
    // NgClass
  ],
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  personajes = signal<Personaje[]>([]);

  addPersonaje() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newPersonaje: Personaje = {
      id: this.personajes().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.personajes.update((list) => [...list, newPersonaje]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
