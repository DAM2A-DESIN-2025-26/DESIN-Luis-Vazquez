import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon, IonImg],
})
export class CamaraPage {
  // Variable para guardar la ruta de la imagen
  fotoUrl: string | undefined;

  constructor() {}

  async hacerFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90, // Calidad de la imagen (0-100)
        allowEditing: false,
        resultType: CameraResultType.Uri, // Nos devuelve una ruta amigable para la web/app
        source: CameraSource.Camera // Fuerza a usar la cámara y no la galería
      });

      // Guardamos la ruta de la imagen en nuestra variable para que el HTML la muestre
      this.fotoUrl = image.webPath;

    } catch (error) {
      console.error('Error al abrir la cámara', error);
      // Es normal que salte un error si el usuario cancela la foto, así que lo capturamos aquí
    }
  }
}
