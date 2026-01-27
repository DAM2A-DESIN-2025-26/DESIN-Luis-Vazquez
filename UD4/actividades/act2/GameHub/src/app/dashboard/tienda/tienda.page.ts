import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonButton]
})
export class TiendaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irA(plataformaSeleccionada:String){
    this.router.navigate(['dashboard/juegos'],{
      state:{plataforma:plataformaSeleccionada}
    })

  }
}
