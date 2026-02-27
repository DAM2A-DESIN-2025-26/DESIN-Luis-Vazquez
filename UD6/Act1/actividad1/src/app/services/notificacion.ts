import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() { }

  async enviarNotificacion(titulo: string, mensaje: string) {
    try {
      // 1. Comprobamos si tenemos permisos
      let permisos = await LocalNotifications.checkPermissions();

      // 2. Si no los tenemos, los solicitamos
      if (permisos.display !== 'granted') {
        permisos = await LocalNotifications.requestPermissions();
      }

      // 3. Si el usuario acepta, programamos la notificación
      if (permisos.display === 'granted') {
        await LocalNotifications.schedule({
          notifications: [
            {
              title: titulo,
              body: mensaje,
              id: new Date().getTime(), // Un ID único basado en la hora actual
              // Programamos la notificación para que salte en 2 segundos
              schedule: { at: new Date(Date.now() + 2000) }
            }
          ]
        });
        console.log('Notificación programada con éxito');
      } else {
        console.warn('Permisos de notificación denegados por el usuario');
      }
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
    }
  }
}
