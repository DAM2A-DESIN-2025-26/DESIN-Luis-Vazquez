import { Component, input } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';

@Component({
  selector: 'valoracion-list',
  imports: [],
  templateUrl: './valoracion-list.html',
  styleUrl: './valoracion-list.scss',
})
export class ValoracionList {
 personajes = input.required<Personajes[]>();
}
