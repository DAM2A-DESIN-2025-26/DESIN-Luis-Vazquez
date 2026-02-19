import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto-service';
import { IonLabel, IonItem, IonImg, IonChip, IonButton } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss'],
  imports: [IonButton, IonChip, IonImg, IonItem, IonLabel],
})
export class ProductoItemComponent implements OnInit {
  @Input({ required: true }) producto!: Producto;

  @Output() productoBorrado = new EventEmitter<number>();
  @Output() productoDetallado = new EventEmitter<number>();
  @Output() productoEditado = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  borrarProducto(event: Event) {
    event.stopPropagation();
    this.productoBorrado.emit(this.producto.id)
  }
  editarProducto(event: Event) {
    event.stopPropagation();
    this.productoEditado.emit(this.producto.id)
  }
  detallarProducto(event: Event) {
    event.stopPropagation();
    this.productoDetallado.emit(this.producto.id)
  }

}
