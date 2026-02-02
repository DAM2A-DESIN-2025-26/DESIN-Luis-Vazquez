import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail, IonButtons, IonIcon
} from '@ionic/angular/standalone';
import { IonRefresherCustomEvent } from '@ionic/core';
import { RecipeElement } from 'src/app/interfaces/Recipe';
import { DummyJSONService } from 'src/app/services/dummy-jsonservice';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons'
@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.page.html',
  styleUrls: ['./lista-recetas.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    RouterLink
  ],
})
export class ListaRecetasPage implements OnInit {

  recipeService = inject(DummyJSONService);
  listaRecetas = signal<RecipeElement[]>([]);

  constructor() { addIcons({ add }); }

  ngOnInit() { this.cargarDatos() }

  cargarDatos(event?: IonRefresherCustomEvent<RefresherEventDetail>) {
    this.recipeService.getRecipes().subscribe({
      next: (respuesta) => {
        this.listaRecetas.set(respuesta.recipes);

        event?.target.complete();
      },
      error: (err) => {
        console.error('Error cargando recetas:', err);
        event?.target.complete(); // Cerramos el spinner aunque falle
      }
    });
  }

  doRefresh($event: IonRefresherCustomEvent<RefresherEventDetail>) {
    this.cargarDatos($event)
  }
}
