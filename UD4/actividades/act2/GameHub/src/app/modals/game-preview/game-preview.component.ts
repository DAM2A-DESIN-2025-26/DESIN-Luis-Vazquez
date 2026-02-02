import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel],
})
export class GamePreviewComponent implements OnInit {
  @Input() juego: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cerrarModal(){
    this.modalCtrl.dismiss();
  }
}
