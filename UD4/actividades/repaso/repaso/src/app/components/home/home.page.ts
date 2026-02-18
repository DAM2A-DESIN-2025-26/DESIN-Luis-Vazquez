import { TareasService } from './../../services/tareas-service';
import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/angular/standalone';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TareaItemComponent, IonList],
})
export class HomePage {
  constructor() {}

  tareasSerivce = inject(TareasService);

  cambiarEstado(id:number){
    this.tareasSerivce.cambiarEstado(id);
  }
}
