import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  ModalController
} from '@ionic/angular/standalone';
import { InfoComponent } from 'src/app/modals/info/info.component';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.page.html',
  styleUrls: ['./cuadrado.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
  ],
})
export class CuadradoPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  openModal() {
    this.modalController.create({
      component:InfoComponent,
    }).then(modal =>{
      modal.present();
    })
  }
}
