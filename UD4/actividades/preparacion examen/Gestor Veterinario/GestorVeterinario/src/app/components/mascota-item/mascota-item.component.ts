import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonIcon, IonItem, IonLabel } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { atCircle } from 'ionicons/icons';
import { Mascota } from 'src/app/interfaces/mascotas';

@Component({
  selector: 'app-mascota-item',
  templateUrl: './mascota-item.component.html',
  styleUrls: ['./mascota-item.component.scss'],
  imports: [IonItem, IonLabel, IonIcon, IonButton],
})
export class MascotaItemComponent implements OnInit {
  constructor() {
    addIcons({ atCircle })
  }

  ngOnInit() { }

  @Input({ required: true }) mascota!: Mascota;

  @Output() mascotaDetallada = new EventEmitter<string>();
  @Output() mascotaEditada = new EventEmitter<string>();
  @Output() mascotaBorrada = new EventEmitter<string>();


  onDetalle(event: Event) {
    event.stopPropagation();
    this.mascotaDetallada.emit();

  }
  onEditar(event: Event) {
    event.stopPropagation();
    this.mascotaEditada.emit();
  }
  onBorrar(event: Event) {
    event.stopPropagation();
    this.mascotaBorrada.emit();
  }

}
