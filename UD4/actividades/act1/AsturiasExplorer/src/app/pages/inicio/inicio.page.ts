import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonButton, IonIcon, IonImg
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
   RouterLink, HeaderComponent, FooterComponent,
    IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonGrid, IonRow, IonCol, IonButton, IonIcon, IonImg
],
})
export class InicioPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  tituloApp:string = "AsturiasExplorer"
  textoCorto:string = "Bienvenidos a AsturiasExplorer, disfruta del paraiso"

}
