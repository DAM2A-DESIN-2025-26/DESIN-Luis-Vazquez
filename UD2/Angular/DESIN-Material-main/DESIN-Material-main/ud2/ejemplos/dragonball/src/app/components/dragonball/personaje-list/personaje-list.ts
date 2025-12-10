import { Component, input } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dragonball-personaje-list',
  imports: [RouterLink],
  templateUrl: './personaje-list.html',

})
export class PersonajeListComponent {
  personajes = input.required<Personaje[]>();
  listName = input.required<string>();
}
