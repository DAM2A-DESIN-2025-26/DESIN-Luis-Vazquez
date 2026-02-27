import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardContent],
})
export class GeolocalizacionPage {
  latitud: number = 0;
  longitud: number = 0;
  mapa: L.Map | any;
  mapaCargado: boolean = false;

  constructor() {}

  async obtenerPosicion() {
    try {
      // 1. Obtenemos las coordenadas con Capacitor
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitud = coordinates.coords.latitude;
      this.longitud = coordinates.coords.longitude;

      // Mostramos el div del mapa en el HTML
      this.mapaCargado = true;

      // 2. Esperamos un instante a que Angular renderice el div y cargamos el mapa
      setTimeout(() => {
        this.cargarMapa();
      }, 100);

    } catch (error) {
      console.error('Error al obtener la ubicación', error);
      alert('Asegúrate de dar permisos de ubicación a la aplicación.');
    }
  }

  cargarMapa() {
    // Si el mapa ya estaba cargado de antes, lo eliminamos para no superponerlos
    if (this.mapa) {
      this.mapa.remove();
    }

    // Inicializamos el mapa centrado en nuestras coordenadas
    this.mapa = L.map('mapaId').setView([this.latitud, this.longitud], 16);

    // Añadimos la capa visual (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.mapa);

    // Añadimos el marcador con el texto exigido en la tarea
    L.marker([this.latitud, this.longitud]).addTo(this.mapa)
      .bindPopup('Estoy aquí')
      .openPopup();
  }
}
