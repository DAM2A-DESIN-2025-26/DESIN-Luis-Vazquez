import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonItem, IonLabel, IonList, IonButton } from '@ionic/angular/standalone';
import { Juego } from '../interfaces/Juego';

@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.page.html',
  styleUrls: ['./juego-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonCard, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonBadge, IonButton],
})
export class JuegoDetallePage implements OnInit {
  juegoEncontrado: Juego | undefined;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const idBuscado = Number(idParam);
      this.juegoEncontrado = this.listaJuegos.find(
        (juego) => juego.id === idBuscado,
      );
    }
  }
  irALaTienda(){
    this.navCtrl.navigateForward("/dashboard/tienda")
  }

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
