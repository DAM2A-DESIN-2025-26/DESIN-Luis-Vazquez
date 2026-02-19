import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonLabel, IonCardHeader, IonChip, IonButton } from '@ionic/angular/standalone';
import { Producto } from 'src/app/interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto-service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
  standalone: true,
  imports: [IonButton, IonChip, IonCardHeader, IonLabel, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductoDetallePage implements OnInit {

  productoEncontrado: Producto | undefined;
  route = inject(ActivatedRoute)
  router = inject(Router)
  productoService = inject(ProductoService)

  constructor() { }

  async ngOnInit() {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (idParam) {
      this.productoEncontrado = await this.productoService.getProductoId(idParam)
    }
  }
  onVolver() {
    this.router.navigate(['/home'])
  }


}
