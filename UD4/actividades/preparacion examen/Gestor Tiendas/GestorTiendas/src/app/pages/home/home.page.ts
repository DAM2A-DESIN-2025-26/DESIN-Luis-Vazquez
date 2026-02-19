import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, AlertController, IonList, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ProductoService } from 'src/app/services/producto-service';
import { ProductoItemComponent } from "src/app/components/producto-item/producto-item.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons, IonList, IonHeader, IonToolbar, IonTitle, IonContent, ProductoItemComponent, IonMenuButton],
})
export class HomePage {
  productosService = inject(ProductoService);
  router = inject(Router)
  alertCtrl = inject(AlertController)

  constructor() { }


  async onBorrar(id: number) {
    const alert = await this.alertCtrl.create({
      header: '¡Atención!',
      message: '¿Estás seguro de que deseas borrar este producto definitivamente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sí, borrar',
          role: 'destructive',
          handler: () => {
            this.productosService.borrarProducto(id)

          }
        }
      ]
    });

    await alert.present();
  }

  onDetalle(id: number) {
    this.router.navigate(['/producto-detalle', id])
  }
  onEditar(id: number) {
    this.router.navigate(['gestion', id])
  }

}
