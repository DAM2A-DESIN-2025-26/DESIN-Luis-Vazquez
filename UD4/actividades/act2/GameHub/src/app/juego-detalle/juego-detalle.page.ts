import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.page.html',
  styleUrls: ['./juego-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JuegoDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
