import { Component, inject, signal } from '@angular/core';
import { PersonajesList } from "../../components/personajesList/personajesList";
import { Personajes } from '../../interfaces/personajes';
import { PersonajesAdd } from "../../components/personajes-add/personajes-add";
import { ValoracionList } from "../../components/valoracion-list/valoracion-list";
import { DragonballService } from '../../services/dragonball-service';


@Component({
  selector: 'app-dragon-ball-super',
  imports: [PersonajesList, PersonajesAdd, ValoracionList],
  templateUrl: './dragon-ball-super.html',
  styleUrl: './dragon-ball-super.scss',
})
export class DragonBallSuper {
  dragonBallService = inject(DragonballService);

  constructor(){
    this.dragonBallService.cargarPersonajes();
  }
}
