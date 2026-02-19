import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonButtons, IonContent, IonFab, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonSearchbar, IonToolbar, IonFabButton, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, add } from 'ionicons/icons';
import { LibroItemComponent } from "src/app/components/libro-item/libro-item.component";
import { Libro } from 'src/app/intefaces/libro';
import { LibroService } from 'src/app/services/libro-service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.page.html',
  styleUrls: ['./libro-lista.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonFabButton, IonFab, IonLabel, IonItem, IonSearchbar, IonIcon, IonButtons, IonContent, IonHeader,  IonToolbar, CommonModule, FormsModule, IonMenuButton, LibroItemComponent]
})
export class LibroListaPage {

  router = inject(Router);
  libroService = inject(LibroService);
  libros = signal<Libro[]>([]);
  alertCtrl = inject(AlertController);

  constructor() {
    addIcons({'addCircle':addCircle, add })
  }
  async ionViewWillEnter() {
    await this.cargarLibros();
  }

  async cargarLibros() {
    const datosRecibidos = await (this.libroService.cargarLibros())
    this.libros.set(datosRecibidos)
  }

  onCrearLibro() {
    this.router.navigate(['/libro-formulario'])
  }

  async onBorrarLibro(_id: string) {
    const alert = await this.alertCtrl.create({
      header: '¡Atención!',
      message: '¿Estás seguro de que deseas borrar este libro definitivamente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sí, borrar',
          role: 'destructive',
          handler: async () => {
            await this.libroService.borrarLibro(_id);
            await this.cargarLibros();
          }
        }
      ]
    });
    await alert.present();

  }
  onEditarLibro(_id: string) {
    this.router.navigate(['/libro-formulario', _id])
  }
  onDetalleLibro(_id: string) {
    this.router.navigate(['/libro-detalle', _id])
  }

//buscador
  textoBusqueda = signal('');

  librosFiltrados = computed(() => {
    const busqueda = this.textoBusqueda().toLowerCase();
    const listaOriginal = this.libros();

    if (!busqueda) {
      return listaOriginal; // Si no hay búsqueda, devolvemos todo
    }

    return listaOriginal.filter(l =>
      l.titulo.toLowerCase().includes(busqueda) ||
      l.autor.toLowerCase().includes(busqueda)
    );
  });

  onSearchChange(event: any) {
    this.textoBusqueda.set(event.detail.value || '');
  }
}

