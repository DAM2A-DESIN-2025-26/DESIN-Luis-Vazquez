import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  totalProductos = signal<number>(0);

  sumarProduct() {
    this.totalProductos.update(cantidad => cantidad + 1)
  }

  resetProducts() {
    this.totalProductos.update(cantidad => 0)
  }

  restarProduct() {
    if (this.totalProductos()>0) {
      this.totalProductos.update(cantidad => cantidad-1)
    }
  }
}
