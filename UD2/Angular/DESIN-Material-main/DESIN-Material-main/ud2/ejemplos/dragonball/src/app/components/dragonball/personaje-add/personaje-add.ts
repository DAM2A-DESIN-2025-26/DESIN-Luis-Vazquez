import { Component, output, signal } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-personaje-add',
  templateUrl: './personaje-add.html',
})
export class PersonajeAddComponent {
  name = signal('');
  power = signal(0);

  newPersonaje = output<Personaje>();

  addPersonaje() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newPersonaje: Personaje = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      ki: this.power(),
      image: "",
    };

    // this.personajes.update((list) => [...list, newPersonaje]);
    this.newPersonaje.emit(newPersonaje);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
