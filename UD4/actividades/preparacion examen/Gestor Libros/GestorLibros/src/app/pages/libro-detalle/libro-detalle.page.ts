import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.page.html',
  styleUrls: ['./libro-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LibroDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
