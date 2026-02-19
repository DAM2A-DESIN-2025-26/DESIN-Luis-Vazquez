import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonToolbar, IonList, IonSearchbar, IonFab, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { Mascota } from 'src/app/interfaces/mascotas';
import { MascotaService } from 'src/app/services/mascota-service';
import { MascotaItemComponent } from "src/app/components/mascota-item/mascota-item.component";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonList, MascotaItemComponent, IonSearchbar, IonFab, IonItem, IonLabel],
})
export class HomePage {

  router = inject(Router);
  mascotaService = inject(MascotaService);
  mascotas = signal<Mascota[]>([]);
  alertCtrl = inject(AlertController);
  constructor() {
    addIcons({ add })

  }
  async ionViewWillEnter() {
    await this.cargarMascotas();
  }

  async cargarMascotas() {
    const datosRecibidos = await (this.mascotaService.cargarMascotas())
    this.mascotas.set(datosRecibidos)
  }

  onCrearMascota() {
    this.router.navigate(['/formulario'])
  }

  async onBorrarMascota(_id: string) {
    const alert = await this.alertCtrl.create({
      header: '¡Atención!',
      message: '¿Estás seguro de que deseas borrar esta mascota definitivamente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sí, borrar',
          role: 'destructive',
          handler: async () => {
            await this.mascotaService.borrarMascota(_id);
            await this.cargarMascotas();
          }
        }
      ]
    });
    await alert.present();

  }
  onEditarMascota(_id: string) {
    this.router.navigate(['/formulario', _id])
  }
  onDetalleMascota(_id: string) {
    this.router.navigate(['/detalle', _id])
  }

//buscador
  textoBusqueda = signal('');

  mascotasFiltradas = computed(() => {
    const busqueda = this.textoBusqueda().toLowerCase();
    const listaOriginal = this.mascotas();

    if (!busqueda) {
      return listaOriginal; // Si no hay búsqueda, devolvemos todo
    }

    return listaOriginal.filter(m =>
      m.nombre.toLowerCase().includes(busqueda) ||
      m.especie.toLowerCase().includes(busqueda)
    );
  });

  onSearchChange(event: any) {
    this.textoBusqueda.set(event.detail.value || '');
  }
}
