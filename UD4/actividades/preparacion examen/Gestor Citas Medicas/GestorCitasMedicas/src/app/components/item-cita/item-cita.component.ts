import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita';
import { IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-item-cita',
  templateUrl: './item-cita.component.html',
  styleUrls: ['./item-cita.component.scss'],
  imports: [IonItem, IonLabel, IonButton],
})
export class ItemCitaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input({required:true}) cita!:Cita;

  @Output() citaDetallada = new EventEmitter<number>
  @Output() citaBorrada = new EventEmitter<number>
  @Output() citaEditada = new EventEmitter<number>

  onDetalle(event: Event) {
    event.stopPropagation();
    this.citaDetallada.emit();

  }
  onEditar(event: Event) {
    event.stopPropagation();
    this.citaEditada.emit();
  }
  onBorrar(event: Event) {
    event.stopPropagation();
    this.citaBorrada.emit();
  }
}
