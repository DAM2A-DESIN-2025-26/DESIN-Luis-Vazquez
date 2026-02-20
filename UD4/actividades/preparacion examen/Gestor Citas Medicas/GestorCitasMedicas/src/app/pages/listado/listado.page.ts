import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, IonList } from '@ionic/angular/standalone';
import { CitasService } from 'src/app/services/citas-service';
import { Router } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
import { AlertController } from '@ionic/angular';
import { ItemCitaComponent } from "src/app/components/item-cita/item-cita.component";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
  standalone: true,
  imports: [IonList, IonRefresherContent, IonRefresher, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ItemCitaComponent]
})
export class ListadoPage implements OnInit {
  router = inject(Router);
  citasService = inject(CitasService);
  citas = signal<Cita[]>([]);
  alertCtrl = inject(AlertController);


  constructor() { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.cargarCitas();
  }
  async cargarCitas() {
    const datosRecibidos = await(this.citasService.cargarCitas())
    this.citas.set(datosRecibidos)
  }

  onCrearCita() {
    this.router.navigate(['/formulario-cita'])
  }

  async onBorrarCita(id: number) {
    const alert = await this.alertCtrl.create({
      header: '¡Atención!',
      message: '¿Estás seguro de que deseas borrar esta cita definitivamente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sí, borrar',
          role: 'destructive',
          handler: async () => {
            await this.citasService.borrarCita(id);
            await this.cargarCitas();
          }
        }
      ]
    });
    await alert.present();

  }
  onEditarCita(id: number) {
    this.router.navigate(['/formulario-cita', id])
  }
  onDetalleCita(id: number) {
    this.router.navigate(['/detalle', id])
  }

}
