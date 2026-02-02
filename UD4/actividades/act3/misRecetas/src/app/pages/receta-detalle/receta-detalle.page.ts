import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonImg, IonLabel, IonTitle, IonToolbar, AlertController, NavController, IonIcon, IonFooter, IonBackButton, IonCardHeader, IonChip, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem } from '@ionic/angular/standalone';
import { DummyJSONService } from 'src/app/services/dummy-jsonservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeElement } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
  standalone: true,
  imports: [RouterLink, IonItem, IonList, IonCardContent, IonCardSubtitle, IonCardTitle, IonChip, IonCardHeader, IonBackButton, IonFooter, IonIcon, IonButtons, IonLabel, IonCard, IonImg, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class RecetaDetallePage implements OnInit {
  private recipeService = inject(DummyJSONService)
  private route = inject(ActivatedRoute)
  private navCtrl = inject(NavController)
  private alertCtrl = inject(AlertController)
  recipeId: number = 0
  receta = signal<RecipeElement | null>(null)

  constructor() {
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.recipeId = +idParam
      this.cargarReceta(this.recipeId)

    }

  }

  cargarReceta(id: number) {
    this.recipeService.getRecipeId(id).subscribe({
      next: (respuesta) => {
        this.receta.set(respuesta);
      },
      error: (err) => {
        console.error('Error cargando detalle de receta:', err);
      }
    });
  }

  async confirmarEliminar() {
    const alert = await this.alertCtrl.create({
      header: "eliminar receta",
      message: "¿Estás seguro que desea eliminar la receta?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Eliminar",
          role: "destructive",
          handler: () => {
            this.borrarReceta()
          }
        },
      ]
    })
    await alert.present();
  }

  borrarReceta() {
    this.recipeService.borrarPost(this.recipeId).subscribe({
      next: () => {
        this.navCtrl.back()
      },
      error: (err) => console.error('Error borrando', err)

    })
  }

}
