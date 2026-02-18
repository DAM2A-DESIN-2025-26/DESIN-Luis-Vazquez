import { Component, inject, Inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton } from '@ionic/angular/standalone';
import { ProductoService } from 'src/app/services/producto-service';
import { ItemProductoComponent } from "../item-producto/item-producto.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, ItemProductoComponent, IonButton],
})
export class HomePage {
  constructor() {}
  productos = ["manzanas", "peras", "mandarinas"]
  productoService = inject(ProductoService)

  anadirProducto(){
    this.productoService.sumarProduct();
  }
  eliminarProducto(){
    this.productoService.restarProduct();
  }

  reset(){
    this.productoService.resetProducts();
  }
}
