import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { MainComponent } from "src/app/components/main/main.component";
import { FooterComponent } from "src/app/components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
],
})
export class InicioPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  nombre: string = 'Luis';
  apellidos: string = 'Vazquez Garcia';
}
