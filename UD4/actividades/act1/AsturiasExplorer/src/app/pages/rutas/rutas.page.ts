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
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    IonicModule
],
})
export class RutasPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  nombre: string = 'Luis';
  apellidos: string = 'Vazquez Garcia';
}
