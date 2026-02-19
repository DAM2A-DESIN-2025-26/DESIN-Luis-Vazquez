import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Mascota } from 'src/app/interfaces/mascotas';
import { MascotaService } from 'src/app/services/mascota-service';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.page.html',
  styleUrls: ['./detalle-mascota.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardContent, IonButton,  IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalleMascotaPage implements OnInit {
  route = inject(ActivatedRoute)
  router = inject(Router)
  mascotaService = inject(MascotaService)
  mascota: Mascota | undefined

  constructor() { }

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.mascota = await this.mascotaService.getMascotaId(idParam)
    }
  }

  onVolver() {
    this.router.navigate(['/home'])
  }
}
