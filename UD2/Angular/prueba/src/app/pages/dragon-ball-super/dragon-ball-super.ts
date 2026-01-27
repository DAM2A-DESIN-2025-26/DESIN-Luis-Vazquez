import { Component, computed, signal } from '@angular/core';
import { PersonajesList } from "../../components/personajesList/personajesList";
import { Personajes } from '../../interfaces/personajes';
import { PersonajesAdd } from "../../components/personajes-add/personajes-add";
import { ValoracionList } from "../../components/valoracion-list/valoracion-list";


@Component({
  selector: 'app-dragon-ball-super',
  imports: [PersonajesList, PersonajesAdd, ValoracionList],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.scss',
})
export class DragonBallSuper {
  name = signal('');
  power = signal(0);

  addPersonaje(personaje:Personajes){
    this.personajes.update((personajes) => [...personajes, personaje]);

  }

  personajes = signal<Personajes[]>([
    { id: 1, name: 'Goku', power: 3000 ,valoracion: 5},
    { id: 2, name: 'Krillin', power: 100, valoracion: 3},
    { id: 3, name: 'Piccolo', power: 2000, valoracion: 4},
  ]);


}
