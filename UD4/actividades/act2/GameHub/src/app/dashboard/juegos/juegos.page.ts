import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Juego, Plataforma } from 'src/app/interfaces/Juego';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,

  ],
})
export class JuegosPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  listaJuegos: Juego[] = [
    {
      id: 1,
      titulo: 'Juego1',
      plataforma: Plataforma.PC,
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
      {
      id: 2,
      titulo: 'Juego2',
      plataforma: Plataforma.PC,
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
      {
      id: 3,
      titulo: 'Juego3',
      plataforma: Plataforma.PC,
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
      {
      id: 4,
      titulo: 'Juego4',
      plataforma: Plataforma.PC,
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
      {
      id: 5,
      titulo: 'Juego5',
      plataforma: Plataforma.PC,
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
  ];
}
