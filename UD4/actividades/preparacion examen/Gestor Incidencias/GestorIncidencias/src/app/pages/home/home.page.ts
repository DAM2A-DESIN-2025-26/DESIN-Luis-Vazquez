import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton } from '@ionic/angular/standalone';
import { IncidenciaService } from 'src/app/services/incidencia-service';
import { ItemIncidenciaComponent } from "src/app/components/item-incidencia/item-incidencia.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, ItemIncidenciaComponent, IonButton],
})
export class HomePage {
  incidenciasService = inject(IncidenciaService);
  router = inject(Router)
  constructor() {}

  onFinalizar(id:number){
    this.incidenciasService.resolverIncidencia(id);
  }

  onReabrir(id:number){
    this.incidenciasService.reabrirIncidencia(id);
  }

  onAnadirIncidencia(){ //comprobar como es el uso del Router
    this.router.navigate(['/nueva-incidencia'])
  }

  onBorrarIncidencia(id:number){
    this.incidenciasService.borrarIncidencia(id);
  }
}
