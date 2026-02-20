import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonImg, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Disfraz } from 'src/app/interfaces/disfraz';
import { Participante } from 'src/app/interfaces/participante';

@Component({
  selector: 'app-item-disfraz',
  templateUrl: './item-disfraz.component.html',
  styleUrls: ['./item-disfraz.component.scss'],
  imports: [IonItem, IonImg, IonLabel],
})
export class ItemDisfrazComponent implements OnInit {
  @Input({ required: true }) disfraz!: Disfraz;

  @Output() participanteDetallado = new EventEmitter<Participante[]>();

  constructor() {}

  ngOnInit() {}

  onDetalleParticipante(event: Event) {
    event.stopPropagation();
    this.participanteDetallado.emit();

  }
}
