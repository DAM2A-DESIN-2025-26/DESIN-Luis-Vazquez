import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DesfileService } from 'src/app/services/desfile-service';
import { Desfile } from 'src/app/interfaces/desfile';
import { ItemDesfileComponent } from "src/app/components/item-desfile/item-desfile.component";

@Component({
  selector: 'app-desfiles',
  templateUrl: './desfiles.page.html',
  styleUrls: ['./desfiles.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    ItemDesfileComponent,
    IonButton
],
})
export class DesfilesPage {
  router = inject(Router);
  desfileService = inject(DesfileService);
  desfiles = signal<Desfile[]>([]);

  constructor() {
  }
  async ionViewWillEnter() {
    await this.cargarDesfiles();
  }

  async cargarDesfiles() {
    const datosRecibidos = await this.desfileService.cargarDesfiles();
    this.desfiles.set(datosRecibidos);
  }

  onCrearDesfile() {
    this.router.navigate(['/formulario-desfile']);
  }
}
