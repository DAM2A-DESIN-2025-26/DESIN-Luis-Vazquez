import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Incidencia } from 'src/app/interfaces/incidencia';
import { IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-item-incidencia',
  templateUrl: './item-incidencia.component.html',
  styleUrls: ['./item-incidencia.component.scss'],
  imports: [IonItem, IonLabel, IonButton],
})
export class ItemIncidenciaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input({ required: true }) incidencia: Incidencia | undefined;

  @Output() cambioEstadoResuelta = new EventEmitter<number>();
  @Output() cambioEstadoAbierta = new EventEmitter<number>();
  @Output() borradoIncidencia = new EventEmitter<number>();

  //@Output() cambioPrioridad = new EventEmitter<void>();

  cambiarEstadoResuelta(event:Event) {
    event.stopPropagation();

    this.cambioEstadoResuelta.emit(this.incidencia?.id);
  }
  cambiarEstadoAbrir(event:Event) {
    event.stopPropagation();
    this.cambioEstadoAbierta.emit(this.incidencia?.id);
  }

  borrar(event:Event){
    event.stopPropagation();
    this.borradoIncidencia.emit(this.incidencia?.id)
  }

  // cambiarPrioridad(){
  //   this.cambioPrioridad.emit();
  // }
}
