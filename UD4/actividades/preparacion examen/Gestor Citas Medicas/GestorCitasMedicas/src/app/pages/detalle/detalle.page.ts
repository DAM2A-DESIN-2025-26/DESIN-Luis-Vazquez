import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../../interfaces/cita';
import { CitasService } from 'src/app/services/citas-service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallePage implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  citaService = inject(CitasService)
  cita: Cita |undefined;

  constructor() { }

  async ngOnInit() {
      const idParam = Number(this.route.snapshot.paramMap.get('id'));

    if (idParam) {
      this.cita = await this.citaService.getCitaId(idParam)
    }
  }

  volver(){
    this.router.navigate(['/listado'])
  }

}
