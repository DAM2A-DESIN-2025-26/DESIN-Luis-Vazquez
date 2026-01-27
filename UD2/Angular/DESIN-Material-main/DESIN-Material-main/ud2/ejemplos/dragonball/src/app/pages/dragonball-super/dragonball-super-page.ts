import { Component, inject } from '@angular/core';
import { PersonajeListComponent } from '../../components/dragonball/personaje-list/personaje-list';
import { DragonballService } from '../../services/dragonball.service';
import { PersonajeAddComponent } from '../../components/dragonball/personaje-add/personaje-add';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [PersonajeListComponent, PersonajeAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);

  constructor() {
  this.dragonballService.cargarPersonajes();
}

}
