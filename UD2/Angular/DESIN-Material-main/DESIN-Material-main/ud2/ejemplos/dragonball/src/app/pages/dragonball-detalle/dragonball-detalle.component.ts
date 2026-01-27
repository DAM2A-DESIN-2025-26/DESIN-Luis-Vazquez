import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-detalle',
  imports: [RouterLink],
  templateUrl: './dragonball-detalle.component.html',
})
export class DragonballDetalleComponent {
  private route = inject(ActivatedRoute);

  dragonballService = inject(DragonballService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor() {
    this.dragonballService.cargarDetalle(this.id);
  }
}
