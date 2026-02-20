import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonImg, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipanteService } from 'src/app/services/participante-service';
import { Participante } from 'src/app/interfaces/participante';

@Component({
  selector: 'app-participantes-detalle',
  templateUrl: './participantes-detalle.page.html',
  styleUrls: ['./participantes-detalle.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonImg,
    IonLabel,
    IonButton
],
})
export class ParticipantesDetallePage implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  participanteService = inject(ParticipanteService);
  participante: Participante | undefined;

  constructor() {}

  async ngOnInit() {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));

    if (idParam) {
      this.participante =
        await this.participanteService.getParticipanteId(idParam);
    }
  }

  onVolver() {
    this.router.navigate(['/disfraces']);
  }
}
