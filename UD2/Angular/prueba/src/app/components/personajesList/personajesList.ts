import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';

@Component({
  selector: 'personajes-list',
  imports: [],
  templateUrl: './personajesList.html',
  styleUrl: './personajesList.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonajesList {
  personajes = input.required<Personajes[]>();
  nombrePagina = input<String>(); //investigar como poner este nombre en el h1 con el nombre de la pagina

}
