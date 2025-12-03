import { Component, input, model, output, signal } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';

@Component({
  selector: 'personajes-add',
  imports: [],
  templateUrl: './personajes-add.html',
  styleUrl: './personajes-add.scss',
})
export class PersonajesAdd {

  name = signal('');
  power = signal(0);
  valoracion = signal(0);

  newPersonaje = output<Personajes>();

  crearPersonaje() {
    // console.log(this.name(), this.power());
    const newPers: Personajes = {
      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power(),
      valoracion: this.valoracion()
    };

    this.newPersonaje.emit(newPers);
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.name.set('');
    this.power.set(0);
  }
}
