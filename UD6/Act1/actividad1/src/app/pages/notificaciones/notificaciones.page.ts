import { Component } from '@angular/core';
import { NotificacionService } from 'src/app/services/notificacion';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon } from "@ionic/angular/standalone";
// Importamos el servicio que hemos creado

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon],
})
export class NotificacionesPage {

  // Inyectamos el servicio en el constructor
  constructor(private notificacionService: NotificacionService) { }

  lanzarAlerta() {
    // Llamamos al método del servicio pasándole el título y el cuerpo del mensaje
    this.notificacionService.enviarNotificacion(
      '¡Hola desde Ionic!',
      'Esta es una notificación nativa de prueba para DESIN.'
    );
  }
}
