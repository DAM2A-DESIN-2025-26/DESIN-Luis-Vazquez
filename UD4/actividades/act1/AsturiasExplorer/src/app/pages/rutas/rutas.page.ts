import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent
],
})
export class RutasPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  nombre: string = 'Luis';
  apellidos: string = 'Vazquez Garcia';
}
