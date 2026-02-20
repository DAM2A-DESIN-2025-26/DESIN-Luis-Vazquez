import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DisfrazService } from 'src/app/services/disfraz-service';
import { Disfraz } from 'src/app/interfaces/disfraz';
import { AlertController } from '@ionic/angular';
import { ItemDisfrazComponent } from "src/app/components/item-disfraz/item-disfraz.component";
import { Participante } from 'src/app/interfaces/participante';
import { ParticipanteService } from 'src/app/services/participante-service';

@Component({
  selector: 'app-disfraces',
  templateUrl: './disfraces.page.html',
  styleUrls: ['./disfraces.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonList,
    ItemDisfrazComponent
],
})
export class DisfracesPage  {
  router = inject(Router);
  disfrazService = inject(DisfrazService);
  participanteService = inject(ParticipanteService)
  disfraces = signal<Disfraz[]>([]);
  idParticipante:number = 0;
  constructor() {

  }
  async ionViewWillEnter() {
    await this.cargarDisfraces();
  }

  async cargarDisfraces() {
    const datosRecibidos = await this.disfrazService.cargarDisfraces();
    this.disfraces.set(datosRecibidos);
  }

  async onDetalleParticipante(particantes: Participante[]) {

    particantes.forEach(participante => {

     this.idParticipante = participante.id;
    });
    // const datosRecibidos = await this.participanteService.getParticipanteId();
    this.router.navigate(['/participantes-detalle', this.idParticipante]);
  }
}
