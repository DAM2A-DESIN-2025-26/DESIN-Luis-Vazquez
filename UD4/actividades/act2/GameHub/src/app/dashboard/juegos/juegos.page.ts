import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Juego } from 'src/app/interfaces/Juego';

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
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    RouterLink,
],
})
export class JuegosPage implements OnInit {
  juegosVisibles: any[] = [];
  filtroActual: string = '';

  constructor(private router: Router) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as { plataforma: string };

    if (state && state.plataforma) {
      this.filtroActual = state.plataforma;
      this.juegosVisibles = this.listaJuegos.filter(
        (juego) => juego.plataforma === state.plataforma,
      );
    } else {
      this.juegosVisibles = [...this.listaJuegos];
    }
  }

  ngOnInit() {}

  listaJuegos: Juego[] = [
    {
      id: 1,
      titulo: 'Juego1',
      plataforma: 'PC',
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
    {
      id: 2,
      titulo: 'Juego2',
      plataforma: 'PC',
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
    {
      id: 3,
      titulo: 'Juego3',
      plataforma: 'PC',
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
    {
      id: 4,
      titulo: 'Juego4',
      plataforma: 'PC',
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
    {
      id: 5,
      titulo: 'Juego5',
      plataforma: 'PC',
      genero: 'Aventuras',
      precio: 10,
      popular: true,
    },
  ];
}
