import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-detalle',
  imports: [RouterLink],
  templateUrl: './dragonball-detalle.component.html',
  styleUrl: './dragonball-detalle.component.css'
})
export class DragonballDetalleComponent {

  private route = inject(ActivatedRoute);

  /*this.route.snapshot.paramMap.get('nombreParámetro'));*/


}
